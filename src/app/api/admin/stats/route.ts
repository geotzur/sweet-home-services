import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { verifyAdminAuth } from "@/lib/admin-auth";

const PLAN_PRICES: Record<string, number> = {
  basic: 89,
  starter: 149,
  growth: 299,
  authority: 499,
};

export async function GET(request: NextRequest) {
  const auth = await verifyAdminAuth(request);
  if ("error" in auth) return auth.error;

  const supabase = getSupabaseAdmin();

  const [ordersRes, subsRes] = await Promise.all([
    supabase.from("orders").select("*").order("created_at", { ascending: false }),
    supabase.from("subscriptions").select("*, orders(business_name, email)").order("created_at", { ascending: false }),
  ]);

  if (ordersRes.error || subsRes.error) {
    console.error("[admin/stats] Fetch error:", ordersRes.error, subsRes.error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }

  const orders = ordersRes.data ?? [];
  const subscriptions = subsRes.data ?? [];

  // Unique clients by email
  const uniqueEmails = new Set(orders.map((o: { email: string }) => o.email.toLowerCase()));

  // Active subscriptions
  const activeSubs = subscriptions.filter((s: { status: string }) => s.status === "active");

  // MRR
  const mrr = activeSubs.reduce(
    (sum: number, s: { plan: string }) => sum + (PLAN_PRICES[s.plan] || 0),
    0,
  );

  // Orders this month
  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();
  const newThisMonth = orders.filter(
    (o: { created_at: string }) => o.created_at >= monthStart,
  ).length;

  // Recent activity — last 10 orders
  const recentOrders = orders.slice(0, 10).map((o: {
    business_name: string;
    plan: string;
    status: string;
    created_at: string;
  }) => ({
    client: o.business_name,
    plan: o.plan,
    status: o.status,
    date: o.created_at,
  }));

  return NextResponse.json({
    totalClients: uniqueEmails.size,
    activeSubscriptions: activeSubs.length,
    mrr,
    newThisMonth,
    pastDue: subscriptions.filter((s: { status: string }) => s.status === "past_due").length,
    recentActivity: recentOrders,
  });
}
