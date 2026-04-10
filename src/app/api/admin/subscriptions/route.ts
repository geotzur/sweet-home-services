import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { verifyAdminAuth } from "@/lib/admin-auth";

export async function GET(request: NextRequest) {
  const auth = await verifyAdminAuth(request);
  if ("error" in auth) return auth.error;

  // Fetch subscriptions with linked order data for business name
  const { data: subscriptions, error: subError } = await getSupabaseAdmin()
    .from("subscriptions")
    .select("*, orders(business_name, email)")
    .order("created_at", { ascending: false });

  if (subError) {
    console.error("[admin/subscriptions] Failed to fetch:", subError);
    return NextResponse.json({ error: "Failed to fetch subscriptions" }, { status: 500 });
  }

  return NextResponse.json({ subscriptions });
}
