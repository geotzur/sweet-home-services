"use client";

import { useState } from "react";

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    past_due: "bg-amber-50 text-amber-700 border-amber-200",
    canceled: "bg-red-50 text-red-700 border-red-200",
    trialing: "bg-blue-50 text-blue-700 border-blue-200",
  };
  const labels: Record<string, string> = {
    active: "Active",
    past_due: "Past Due",
    canceled: "Canceled",
    trialing: "Trialing",
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
      {plan}
    </span>
  );
}

const subscriptions = [
  {
    id: "sub_1",
    client: "Mountain View Plumbing",
    email: "mike@mountainviewplumbing.com",
    plan: "Growth",
    status: "active",
    amount: "$299",
    started: "2025-11-14",
    nextBilling: "2026-04-14",
    stripeId: "sub_1MowQVLk...hJ7p",
  },
  {
    id: "sub_2",
    client: "Studio Diane",
    email: "diane@studiodiane.com",
    plan: "Starter",
    status: "active",
    amount: "$149",
    started: "2025-12-03",
    nextBilling: "2026-04-03",
    stripeId: "sub_1NpqRWMl...kL2q",
  },
  {
    id: "sub_3",
    client: "Millbrook Family Dental",
    email: "greg@millbrookdental.com",
    plan: "Authority",
    status: "active",
    amount: "$499",
    started: "2026-01-10",
    nextBilling: "2026-04-10",
    stripeId: "sub_1OqrSXNm...mM3r",
  },
  {
    id: "sub_4",
    client: "Austin AC Pros",
    email: "carlos@austinacpros.com",
    plan: "Growth",
    status: "past_due",
    amount: "$299",
    started: "2025-10-22",
    nextBilling: "2026-03-22",
    stripeId: "sub_1PrsTYOn...nN4s",
  },
  {
    id: "sub_5",
    client: "Paws & Claws Grooming",
    email: "jen@pawsandclaws.com",
    plan: "Basic",
    status: "active",
    amount: "$89",
    started: "2026-02-18",
    nextBilling: "2026-04-18",
    stripeId: "sub_1QstUZPo...oO5t",
  },
  {
    id: "sub_6",
    client: "Sunrise Yoga Studio",
    email: "amy@sunriseyoga.com",
    plan: "Starter",
    status: "canceled",
    amount: "$149",
    started: "2025-09-05",
    nextBilling: "—",
    stripeId: "sub_1RtuVAQp...pP6u",
  },
];

export default function SubscriptionsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? subscriptions
      : subscriptions.filter((s) => s.status === filter);

  const totalMRR = subscriptions
    .filter((s) => s.status === "active")
    .reduce((sum, s) => sum + parseInt(s.amount.replace("$", "").replace(",", "")), 0);

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
            {subscriptions.filter((s) => s.status === "active").length}
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
              {["Client", "Plan", "Amount", "Status", "Started", "Next Billing", ""].map((h) => (
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
            {filtered.map((sub) => (
              <tr key={sub.id} className="hover:bg-neutral-50 transition-colors">
                <td className="px-5 py-4">
                  <p className="text-sm font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                    {sub.client}
                  </p>
                  <p className="text-xs text-neutral-400" style={{ fontFamily: "var(--font-sans)" }}>
                    {sub.email}
                  </p>
                </td>
                <td className="px-5 py-4">
                  <PlanBadge plan={sub.plan} />
                </td>
                <td className="px-5 py-4">
                  <span className="text-sm font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                    {sub.amount}
                  </span>
                  <span className="text-xs text-neutral-400">/mo</span>
                </td>
                <td className="px-5 py-4">
                  <StatusBadge status={sub.status} />
                </td>
                <td className="px-5 py-4 text-sm text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
                  {sub.started}
                </td>
                <td className="px-5 py-4 text-sm text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
                  {sub.nextBilling}
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    className="text-xs font-medium transition-colors hover:text-brand-teal-600"
                    style={{ fontFamily: "var(--font-heading)", color: "#1A6B6B" }}
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
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
