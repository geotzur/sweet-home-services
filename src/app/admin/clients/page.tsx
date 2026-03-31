"use client";

import { useState } from "react";

/* ─── Status badge component ───────────────────────────────────────── */
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    past_due: "bg-amber-50 text-amber-700 border-amber-200",
    canceled: "bg-red-50 text-red-700 border-red-200",
  };

  const labels: Record<string, string> = {
    active: "Active",
    past_due: "Past Due",
    canceled: "Canceled",
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

/* ─── Placeholder client data ──────────────────────────────────────── */
const clients = [
  {
    id: "1",
    name: "Mountain View Plumbing",
    email: "mike@mountainviewplumbing.com",
    plan: "Pro",
    status: "active",
    joined: "2025-11-14",
  },
  {
    id: "2",
    name: "Bella Vista Salon",
    email: "info@bellavistasalon.com",
    plan: "Growth",
    status: "active",
    joined: "2025-12-02",
  },
  {
    id: "3",
    name: "Sunrise Dental Care",
    email: "admin@sunrisedental.com",
    plan: "Starter",
    status: "active",
    joined: "2026-01-09",
  },
  {
    id: "4",
    name: "Peak Fitness Studio",
    email: "hello@peakfitness.com",
    plan: "Growth",
    status: "active",
    joined: "2026-01-22",
  },
  {
    id: "5",
    name: "Oakwood Legal Group",
    email: "contact@oakwoodlegal.com",
    plan: "Growth",
    status: "past_due",
    joined: "2025-10-05",
  },
  {
    id: "6",
    name: "Riverside Auto Repair",
    email: "service@riversideauto.com",
    plan: "Starter",
    status: "canceled",
    joined: "2025-08-18",
  },
  {
    id: "7",
    name: "Green Thumb Landscaping",
    email: "jobs@greenthumblandscaping.com",
    plan: "Pro",
    status: "active",
    joined: "2026-02-11",
  },
  {
    id: "8",
    name: "Harbor View Restaurant",
    email: "mgr@harborviewrestaurant.com",
    plan: "Starter",
    status: "active",
    joined: "2026-03-01",
  },
];

export default function AdminClientsPage() {
  const [search, setSearch] = useState("");

  const filtered = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      {/* Page heading */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1
            className="text-2xl font-bold text-neutral-900"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Clients
          </h1>
          <p
            className="mt-1 text-sm text-neutral-500"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {clients.length} total clients
          </p>
        </div>

        {/* Search bar */}
        <div className="relative w-full sm:w-72">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="M13.5 13.5L17 17" />
          </svg>
          <input
            type="text"
            placeholder="Search clients..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-neutral-300 py-2 pr-3 pl-9 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/20 focus:outline-none"
            style={{ fontFamily: "var(--font-sans)" }}
          />
        </div>
      </div>

      {/* ── Clients table ──────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-neutral-200 bg-neutral-50">
                <th
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Name
                </th>
                <th
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Email
                </th>
                <th
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Plan
                </th>
                <th
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Status
                </th>
                <th
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Joined
                </th>
                <th
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((client) => (
                <tr
                  key={client.id}
                  className="transition-colors hover:bg-neutral-50/60"
                >
                  <td
                    className="whitespace-nowrap px-5 py-4 font-medium text-neutral-900"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {client.name}
                  </td>
                  <td
                    className="whitespace-nowrap px-5 py-4 text-neutral-600"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {client.email}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <span
                      className="inline-flex items-center rounded-md bg-brand-teal-50 px-2 py-0.5 text-xs font-medium text-brand-teal-700"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {client.plan}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <StatusBadge status={client.status} />
                  </td>
                  <td
                    className="whitespace-nowrap px-5 py-4 text-neutral-500"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {new Date(client.joined).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <button
                      className="text-sm font-medium text-brand-teal-500 transition-colors hover:text-brand-teal-700"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-sm text-neutral-400"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    No clients match your search.
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
