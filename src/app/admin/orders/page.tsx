"use client";

import { Fragment, useCallback, useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase-browser";

/* ─── Status types & styling ──────────────────────────────────────── */
type OrderStatus =
  | "pending_payment"
  | "paid"
  | "in_progress"
  | "completed"
  | "canceled";

const statusStyles: Record<OrderStatus, string> = {
  pending_payment: "bg-amber-50 text-amber-700 border-amber-200",
  paid: "bg-blue-50 text-blue-700 border-blue-200",
  in_progress: "bg-teal-50 text-teal-700 border-teal-200",
  completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  canceled: "bg-red-50 text-red-700 border-red-200",
};

const statusLabels: Record<OrderStatus, string> = {
  pending_payment: "Pending Payment",
  paid: "Paid",
  in_progress: "In Progress",
  completed: "Completed",
  canceled: "Canceled",
};

function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {statusLabels[status]}
    </span>
  );
}

/* ─── Filter tabs ─────────────────────────────────────────────────── */
const filterTabs: { label: string; value: OrderStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Pending Payment", value: "pending_payment" },
  { label: "Paid", value: "paid" },
  { label: "In Progress", value: "in_progress" },
  { label: "Completed", value: "completed" },
];

/* ─── Order interface ─────────────────────────────────────────────── */
interface Order {
  id: string;
  business_name: string;
  email: string;
  phone: string | null;
  plan: string;
  status: OrderStatus;
  industry: string | null;
  address: string | null;
  website_url: string | null;
  services: string | null;
  areas_covered: string | null;
  logo_url: string | null;
  requirements: string | null;
  brand_colors: string | null;
  created_at: string;
}

const planLabels: Record<string, string> = {
  basic: "Basic",
  starter: "Starter",
  growth: "Growth",
  authority: "Authority",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<OrderStatus | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchOrders = useCallback(async () => {
    const { data: { session } } = await getSupabase().auth.getSession();
    if (!session) return;

    const res = await fetch("/api/admin/orders", {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });

    if (res.ok) {
      const data = await res.json();
      setOrders(data.orders ?? []);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchOrders(); }, [fetchOrders]);

  const filtered =
    activeFilter === "all"
      ? orders
      : orders.filter((o) => o.status === activeFilter);

  const stats = {
    total: orders.length,
    pendingPayment: orders.filter((o) => o.status === "pending_payment").length,
    inProgress: orders.filter((o) => o.status === "in_progress").length,
    completed: orders.filter((o) => o.status === "completed").length,
  };

  const summaryCards = [
    {
      label: "Total Orders",
      value: stats.total,
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="2" width="14" height="17" rx="2" />
          <path d="M7 6h6M7 10h6M7 14h4" />
        </svg>
      ),
      bg: "bg-brand-teal-50",
      color: "text-brand-teal-500",
    },
    {
      label: "Pending Payment",
      value: stats.pendingPayment,
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="10" r="7.5" />
          <path d="M10 6v4.5L13 13" />
        </svg>
      ),
      bg: "bg-amber-50",
      color: "text-amber-500",
    },
    {
      label: "In Progress",
      value: stats.inProgress,
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17l4-4 3 3 7-8" />
          <path d="M14 8h3v3" />
        </svg>
      ),
      bg: "bg-teal-50",
      color: "text-teal-500",
    },
    {
      label: "Completed",
      value: stats.completed,
      icon: (
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="10" r="7.5" />
          <path d="M7 10l2 2 4-4" />
        </svg>
      ),
      bg: "bg-emerald-50",
      color: "text-emerald-500",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-teal-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div>
      {/* Page heading */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold text-neutral-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Orders
        </h1>
        <p
          className="mt-1 text-sm text-neutral-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Client onboarding submissions
        </p>
      </div>

      {/* ── Summary cards ──────────────────────────────────────────── */}
      <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span
                className="text-xs font-semibold uppercase tracking-wider text-neutral-500"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {card.label}
              </span>
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${card.bg} ${card.color}`}
              >
                {card.icon}
              </span>
            </div>
            <p
              className="mt-3 text-3xl font-bold text-neutral-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* ── Filter tabs ────────────────────────────────────────────── */}
      <div className="mt-8 mb-4 flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
        {filterTabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveFilter(tab.value)}
            className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
              activeFilter === tab.value
                ? "bg-brand-teal-600 text-white shadow-sm"
                : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50"
            }`}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Orders table ───────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm -mx-4 sm:mx-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                {["Business Name", "Email", "Plan", "Status", "Industry", "Created", "Actions"].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((order) => (
                <Fragment key={order.id}>
                  <tr className="transition-colors hover:bg-neutral-50/60">
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-neutral-900" style={{ fontFamily: "var(--font-sans)" }}>
                      {order.business_name}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-neutral-600" style={{ fontFamily: "var(--font-sans)" }}>
                      {order.email}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className="inline-flex items-center rounded-md bg-brand-teal-50 px-2 py-0.5 text-xs font-medium text-brand-teal-700"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {planLabels[order.plan] ?? order.plan}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-neutral-600" style={{ fontFamily: "var(--font-sans)" }}>
                      {order.industry ?? "—"}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
                      {new Date(order.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <button
                        onClick={() => setExpandedId(expandedId === order.id ? null : order.id)}
                        className="text-sm font-medium text-brand-teal-500 transition-colors hover:text-brand-teal-700"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {expandedId === order.id ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>

                  {expandedId === order.id && (
                    <tr key={`${order.id}-detail`} className="bg-neutral-50/50">
                      <td colSpan={7} className="px-5 py-6">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {[
                            { label: "Phone", value: order.phone },
                            { label: "Address", value: order.address },
                            { label: "Website", value: order.website_url || "Not provided" },
                            { label: "Services", value: order.services },
                            { label: "Service Areas", value: order.areas_covered },
                            { label: "Logo", value: order.logo_url || "Not uploaded" },
                            { label: "Requirements", value: order.requirements },
                            { label: "Brand Colors", value: order.brand_colors },
                          ].map((field) => (
                            <div key={field.label}>
                              <p
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                              >
                                {field.label}
                              </p>
                              <p className="text-sm text-neutral-700" style={{ fontFamily: "var(--font-sans)" }}>
                                {field.value || "—"}
                              </p>
                            </div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-12 text-center text-sm text-neutral-400"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    No orders match the selected filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
