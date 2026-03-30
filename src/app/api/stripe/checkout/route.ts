import { NextRequest, NextResponse } from "next/server";
import { getStripe, PLAN_PRICE_MAP } from "@/lib/stripe";

const VALID_PLANS = ["starter", "growth", "authority"] as const;
type Plan = (typeof VALID_PLANS)[number];

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { planId?: string };

    if (!body.planId || !VALID_PLANS.includes(body.planId as Plan)) {
      return NextResponse.json(
        { error: "Invalid planId. Must be one of: starter, growth, authority" },
        { status: 400 },
      );
    }

    const priceId = PLAN_PRICE_MAP[body.planId];
    if (!priceId) {
      return NextResponse.json(
        { error: `Stripe price not configured for plan: ${body.planId}` },
        { status: 500 },
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await getStripe().checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      metadata: { plan: body.planId },
    });

    return NextResponse.json({ sessionUrl: session.url });
  } catch (err) {
    console.error("[stripe/checkout] Error creating session:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
