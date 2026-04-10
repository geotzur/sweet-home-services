import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import type Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("[stripe/webhook] Missing STRIPE_WEBHOOK_SECRET");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("[stripe/webhook] Signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      case "customer.subscription.deleted":
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      case "invoice.payment_failed":
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      default:
        console.log(`[stripe/webhook] Unhandled event type: ${event.type}`);
    }
  } catch (err) {
    console.error(`[stripe/webhook] Error handling ${event.type}:`, err);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const customerId = session.customer as string;
  const subscriptionId = session.subscription as string;
  const plan = session.metadata?.plan;
  const orderId = session.metadata?.order_id || null;

  if (!plan || !customerId || !subscriptionId) {
    console.error("[stripe/webhook] Missing data in checkout.session.completed", {
      customerId,
      subscriptionId,
      plan,
    });
    return;
  }

  // Retrieve the customer email from Stripe
  const customer = await getStripe().customers.retrieve(customerId);
  if (customer.deleted) return;

  const customerEmail = customer.email || null;

  // Create/update subscription — no user account required
  const { error } = await getSupabaseAdmin().from("subscriptions").upsert(
    {
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      plan,
      status: "active",
      customer_email: customerEmail,
      order_id: orderId,
    },
    { onConflict: "stripe_subscription_id" },
  );

  if (error) {
    console.error("[stripe/webhook] Failed to upsert subscription:", error);
    throw error;
  }

  console.log(`[stripe/webhook] Subscription activated: ${subscriptionId} (${plan}) for ${customerEmail}`);

  // Link payment back to the onboarding order if present
  if (orderId) {
    await getSupabaseAdmin().from("orders").update({
      status: "paid",
      stripe_session_id: session.id,
      stripe_subscription_id: subscriptionId,
    }).eq("id", orderId);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const { error } = await getSupabaseAdmin()
    .from("subscriptions")
    .update({ status: "canceled" })
    .eq("stripe_subscription_id", subscription.id);

  if (error) {
    console.error("[stripe/webhook] Failed to cancel subscription:", error);
    throw error;
  }

  console.log(`[stripe/webhook] Subscription canceled: ${subscription.id}`);
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const sub = invoice.parent?.subscription_details?.subscription;
  const subscriptionId = typeof sub === "string" ? sub : sub?.id ?? null;
  if (!subscriptionId) return;

  const { error } = await getSupabaseAdmin()
    .from("subscriptions")
    .update({ status: "past_due" })
    .eq("stripe_subscription_id", subscriptionId);

  if (error) {
    console.error("[stripe/webhook] Failed to flag past_due:", error);
    throw error;
  }

  console.log(`[stripe/webhook] Subscription flagged past_due: ${subscriptionId}`);
}
