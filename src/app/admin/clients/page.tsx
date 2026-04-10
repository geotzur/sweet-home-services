"use client";

import { useCallback, useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase-browser";

/* ─── Status badge ────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    paid: "bg-blue-50 text-blue-700 border-blue-200",
    in_progress: "bg-teal-50 text-teal-700 border-teal-200",
    completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pending_payment: "bg-amber-50 text-amber-700 border-amber-200",
    canceled: "bg-red-50 text-red-700 border-red-200",
  };

  const labels: Record<string, string> = {
    active: "Active",
    paid: "Paid",
    in_progress: "In Progress",
    completed: "Completed",
    pending_payment: "Pending",
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

const planLabels: Record<string, string> = {
  basic: "Basic",
  starter: "Starter",
  growth: "Growth",
  authority: "Authority",
};

/* ─── Client interface (derived from orders) ──────────────────────── */
interface ClientRow {
  email: string;
  name: string;
  totalOrders: number;
  plans: string[];
  latestStatus: string;
  firstOrder: string;
}

interface Order {
  email: string;
  business_name: string;
  plan: string;
  status: string;
  created_at: string;
}

function deriveClients(orders: Order[]): ClientRow[] {
  const byEmail = new Map<string, Order[]>();
  for (const o of orders) {
    const key = o.email.toLowerCase();
    if (!byEmail.has(key)) byEmail.set(key, []);
    byEmail.get(key)!.push(o);
  }

  const clients: ClientRow[] = [];
  for (const [email, group] of byEmail) {
    const sorted = [...group].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
    const uniquePlans = [...new Set(group.map((o) => o.plan))];
    clients.push({
      email,
      name: sorted[0].business_name,
      totalOrders: group.length,
      plans: uniquePlans,
      latestStatus: sorted[0].status,
      firstOrder: sorted[sorted.length - 1].created_at,
    });
  }

  return clients.sort(
    (a, b) => new Date(b.firstOrder).getTime() - new Date(a.firstOrder).getTime(),
  );
}

export default function AdminClientsPage() {
  const [clients, setClients] = useState<ClientRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchClients = useCallback(async () => {
    const { data: { session } } = await getSupabase().auth.getSession();
    if (!session) return;

    const res = await fetch("/api/admin/orders", {
      headers: { Authorization: `Bearer ${session.access_token}` },
    });

    if (res.ok) {
      const data = await res.json();
      setClients(deriveClients(data.orders ?? []));
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchClients(); }, [fetchClients]);

  const filtered = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()),
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
                {["Name", "Email", "Orders", "Plans", "Latest Status", "First Order"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-neutral-500"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filtered.map((client) => (
                <tr
                  key={client.email}
                  className="transition-colors hover:bg-neutral-50/60"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-neutral-900" style={{ fontFamily: "var(--font-sans)" }}>
                    {client.name}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-neutral-600" style={{ fontFamily: "var(--font-sans)" }}>
                    {client.email}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-neutral-900 font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                    {client.totalOrders}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <div className="flex gap-1.5 flex-wrap">
                      {client.plans.map((p) => (
                        <span
                          key={p}
                          className="inline-flex items-center rounded-md bg-brand-teal-50 px-2 py-0.5 text-xs font-medium text-brand-teal-700"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {planLabels[p] ?? p}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <StatusBadge status={client.latestStatus} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
                    {new Date(client.firstOrder).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
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
