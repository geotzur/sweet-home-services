"use client";

import { useCallback, useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase-browser";

const planLabels: Record<string, string> = {
  basic: "Basic",
  starter: "Starter",
  growth: "Growth",
  authority: "Authority",
};

const statusLabels: Record<string, string> = {
  pending_payment: "Pending Payment",
  paid: "Paid",
  in_progress: "In Progress",
  completed: "Completed",
  canceled: "Canceled",
};

interface Stats {
  totalClients: number;
  activeSubscriptions: number;
  mrr: number;
  newThisMonth: number;
  pastDue: number;
  recentActivity: {
    client: string;
    plan: string;
    status: string;
    date: string;
  }[];
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = useCallback(async () => {
    const { data: { session } } = await getSupabase().auth.getSession();
    if (!session) return;

    const res = await fetch("/api/admin/stats", {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });

    if (res.ok) {
      setStats(await res.json());
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchStats(); }, [fetchStats]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-teal-500 border-t-transparent" />
      </div>
    );
  }

  const cards = [
    {
      label: "Total Clients",
      value: stats?.totalClients ?? 0,
      sub: `${stats?.newThisMonth ?? 0} new this month`,
      subType: (stats?.newThisMonth ?? 0) > 0 ? "positive" : "neutral",
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="6" r="3.5" />
          <path d="M3 18c0-3.5 3.13-6 7-6s7 2.5 7 6" />
        </svg>
      ),
    },
    {
      label: "Active Subscriptions",
      value: stats?.activeSubscriptions ?? 0,
      sub: `${stats?.pastDue ?? 0} past due`,
      subType: (stats?.pastDue ?? 0) > 0 ? "warning" : "neutral",
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="16" height="12" rx="2" />
          <path d="M2 8h16" />
          <path d="M6 12h4" />
        </svg>
      ),
    },
    {
      label: "Monthly Revenue",
      value: `$${(stats?.mrr ?? 0).toLocaleString()}`,
      sub: "active subscriptions",
      subType: "neutral" as const,
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 2v16M6 6c0-1.1 1.79-2 4-2s4 .9 4 2-1.79 2-4 2-4 .9-4 2 1.79 2 4 2 4-.9 4-2" />
        </svg>
      ),
    },
    {
      label: "New This Month",
      value: stats?.newThisMonth ?? 0,
      sub: "orders placed",
      subType: "neutral" as const,
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17l4-4 3 3 7-8" />
          <path d="M14 8h3v3" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold text-neutral-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Dashboard
        </h1>
        <p
          className="mt-1 text-sm text-neutral-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Overview of your client subscriptions and revenue
        </p>
      </div>

      {/* ── Summary cards ──────────────────────────────────────────── */}
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">
        {cards.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.label}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-teal-50 text-brand-teal-500">
                {stat.icon}
              </span>
            </div>
            <p
              className="mt-3 text-3xl font-bold text-neutral-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {stat.value}
            </p>
            <p
              className={`mt-1 text-xs ${
                stat.subType === "positive"
                  ? "text-emerald-600"
                  : stat.subType === "warning"
                    ? "text-amber-600"
                    : "text-neutral-400"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {stat.sub}
            </p>
          </div>
        ))}
      </div>

      {/* ── Recent activity ────────────────────────────────────────── */}
      <div className="mt-8">
        <h2
          className="mb-4 text-lg font-bold text-neutral-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Recent Orders
        </h2>
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          {stats?.recentActivity && stats.recentActivity.length > 0 ? (
            <ul className="divide-y divide-neutral-100">
              {stats.recentActivity.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between gap-4 px-5 py-4"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-neutral-900" style={{ fontFamily: "var(--font-sans)" }}>
                      <span className="font-semibold text-brand-teal-600">{item.client}</span>
                      {" — "}
                      {planLabels[item.plan] ?? item.plan} plan
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
                      {statusLabels[item.status] ?? item.status}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-neutral-400" style={{ fontFamily: "var(--font-sans)" }}>
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-5 py-12 text-center text-sm text-neutral-400" style={{ fontFamily: "var(--font-sans)" }}>
              No orders yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
