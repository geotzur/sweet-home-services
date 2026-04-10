"use client";

import { useCallback, useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase-browser";

const PLAN_PRICES: Record<string, number> = {
  basic: 89,
  starter: 149,
  growth: 299,
  authority: 499,
};

const planLabels: Record<string, string> = {
  basic: "Basic",
  starter: "Starter",
  growth: "Growth",
  authority: "Authority",
};

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    past_due: "bg-amber-50 text-amber-700 border-amber-200",
    canceled: "bg-red-50 text-red-700 border-red-200",
    incomplete: "bg-neutral-50 text-neutral-600 border-neutral-200",
  };
  const labels: Record<string, string> = {
    active: "Active",
    past_due: "Past Due",
    canceled: "Canceled",
    incomplete: "Incomplete",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        styles[status] ?? "bg-neutral-50 text-neutral-600 border-neutral-200"
      }`}
    >
      {labels[status] ?? status}
    </span>
  );
}

function PlanBadge({ plan }: { plan: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
      style={{
        background: "#E6F3F3",
        color: "#1A6B6B",
        fontFamily: "var(--font-heading)",
      }}
    >
      {planLabels[plan] ?? plan}
    </span>
  );
}

interface Subscription {
  id: string;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  plan: string;
  status: string;
  customer_email: string | null;
  order_id: string | null;
  created_at: string;
  updated_at: string;
  orders: { business_name: string; email: string } | null;
}

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  const fetchSubscriptions = useCallback(async () => {
    const { data: { session } } = await getSupabase().auth.getSession();
    if (!session) return;

    const res = await fetch("/api/admin/subscriptions", {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });

    if (res.ok) {
      const data = await res.json();
      setSubscriptions(data.subscriptions ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchSubscriptions(); }, [fetchSubscriptions]);

  const filtered =
    filter === "all"
      ? subscriptions
      : subscriptions.filter((s) => s.status === filter);

  const activeSubs = subscriptions.filter((s) => s.status === "active");
  const totalMRR = activeSubs.reduce(
    (sum, s) => sum + (PLAN_PRICES[s.plan] || 0),
    0,
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-teal-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-2xl font-bold text-neutral-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Subscriptions
        </h1>
        <p
          className="mt-1 text-sm text-neutral-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Manage client billing and subscription status
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            Active Subscriptions
          </p>
          <p className="mt-1 text-2xl font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
            {activeSubs.length}
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            Monthly Recurring Revenue
          </p>
          <p className="mt-1 text-2xl font-bold" style={{ fontFamily: "var(--font-heading)", color: "#1A6B6B" }}>
            ${totalMRR.toLocaleString()}
          </p>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
            Past Due
          </p>
          <p className="mt-1 text-2xl font-bold text-amber-600" style={{ fontFamily: "var(--font-heading)" }}>
            {subscriptions.filter((s) => s.status === "past_due").length}
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-6">
        {["all", "active", "past_due", "canceled"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
              background: filter === f ? "#1A6B6B" : "transparent",
              color: filter === f ? "#FFFFFF" : "#6B7280",
              border: filter === f ? "none" : "1px solid #E5E7EB",
            }}
          >
            {f === "all" ? "All" : f === "past_due" ? "Past Due" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white">
        <table className="min-w-full divide-y divide-neutral-200">
          <thead>
            <tr className="bg-neutral-50">
              {["Client", "Plan", "Amount", "Status", "Started", "Stripe ID"].map((h) => (
                <th
                  key={h}
                  className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {filtered.map((sub) => {
              const clientName = sub.orders?.business_name ?? "Unknown";
              const clientEmail = sub.orders?.email ?? sub.customer_email ?? "—";
              const amount = PLAN_PRICES[sub.plan] ?? 0;

              return (
                <tr key={sub.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                      {clientName}
                    </p>
                    <p className="text-xs text-neutral-400" style={{ fontFamily: "var(--font-sans)" }}>
                      {clientEmail}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <PlanBadge plan={sub.plan} />
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                      ${amount}
                    </span>
                    <span className="text-xs text-neutral-400">/mo</span>
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={sub.status} />
                  </td>
                  <td className="px-5 py-4 text-sm text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
                    {new Date(sub.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-mono text-neutral-400">
                      {sub.stripe_subscription_id.slice(0, 20)}...
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="px-5 py-12 text-center text-sm text-neutral-400" style={{ fontFamily: "var(--font-sans)" }}>
            No subscriptions match this filter.
          </div>
        )}
      </div>
    </div>
  );
}
