"use client";

/* ─── Placeholder data — will be wired to Supabase later ───────────── */
const stats = [
  {
    label: "Total Clients",
    value: "24",
    change: "+3 this month",
    changeType: "positive" as const,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="6" r="3.5" />
        <path d="M3 18c0-3.5 3.13-6 7-6s7 2.5 7 6" />
      </svg>
    ),
  },
  {
    label: "Active Subscriptions",
    value: "21",
    change: "87.5% of total",
    changeType: "neutral" as const,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M2 8h16" />
        <path d="M6 12h4" />
      </svg>
    ),
  },
  {
    label: "Monthly Revenue",
    value: "$4,347",
    change: "+12% vs last month",
    changeType: "positive" as const,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2v16M6 6c0-1.1 1.79-2 4-2s4 .9 4 2-1.79 2-4 2-4 .9-4 2 1.79 2 4 2 4-.9 4-2" />
      </svg>
    ),
  },
  {
    label: "New This Month",
    value: "3",
    change: "vs 2 last month",
    changeType: "positive" as const,
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17l4-4 3 3 7-8" />
        <path d="M14 8h3v3" />
      </svg>
    ),
  },
];

/* ─── Recent activity — placeholder ────────────────────────────────── */
const recentActivity = [
  {
    action: "New subscription",
    client: "Bella Vista Salon",
    detail: "Growth plan activated",
    time: "2 hours ago",
  },
  {
    action: "Payment received",
    client: "Mountain View Plumbing",
    detail: "$199.00 — Pro plan",
    time: "5 hours ago",
  },
  {
    action: "Client onboarded",
    client: "Sunrise Dental Care",
    detail: "Starter plan",
    time: "1 day ago",
  },
  {
    action: "Subscription upgraded",
    client: "Peak Fitness Studio",
    detail: "Starter → Growth",
    time: "2 days ago",
  },
  {
    action: "Payment received",
    client: "Oakwood Legal Group",
    detail: "$299.00 — Growth plan",
    time: "3 days ago",
  },
];

export default function AdminDashboardPage() {
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
        {stats.map((stat) => (
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
                stat.changeType === "positive"
                  ? "text-emerald-600"
                  : "text-neutral-400"
              }`}
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {stat.change}
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
          Recent Activity
        </h2>
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
          <ul className="divide-y divide-neutral-100">
            {recentActivity.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between gap-4 px-5 py-4"
              >
                <div className="min-w-0">
                  <p
                    className="text-sm font-medium text-neutral-900"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.action}{" "}
                    <span className="font-semibold text-brand-teal-600">
                      {item.client}
                    </span>
                  </p>
                  <p
                    className="mt-0.5 text-xs text-neutral-500"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item.detail}
                  </p>
                </div>
                <span
                  className="shrink-0 text-xs text-neutral-400"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
