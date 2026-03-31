"use client";

import { Fragment, useState } from "react";

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
  businessName: string;
  email: string;
  phone: string;
  plan: string;
  status: OrderStatus;
  industry: string;
  address: string;
  website: string;
  services: string;
  serviceAreas: string;
  logoUrl: string;
  requirements: string;
  brandColors: string;
  createdAt: string;
}

/* ─── Placeholder data ────────────────────────────────────────────── */
const orders: Order[] = [
  {
    id: "ORD-001",
    businessName: "Mountain View Plumbing",
    email: "mike@mountainviewplumbing.com",
    phone: "(303) 555-0142",
    plan: "Growth",
    status: "completed",
    industry: "Home Services",
    address: "1420 Alpine Dr, Boulder, CO 80302",
    website: "mountainviewplumbing.com",
    services: "Emergency plumbing, drain cleaning, water heater installation",
    serviceAreas: "Boulder, Longmont, Lafayette, Louisville",
    logoUrl: "/uploads/mvp-logo.png",
    requirements: "Emphasis on 24/7 emergency service. Needs online booking.",
    brandColors: "#1B4D8E, #F5A623",
    createdAt: "2026-01-15",
  },
  {
    id: "ORD-002",
    businessName: "Bella Vista Salon",
    email: "info@bellavistasalon.com",
    phone: "(512) 555-0198",
    plan: "Authority",
    status: "in_progress",
    industry: "Beauty & Wellness",
    address: "88 Congress Ave, Austin, TX 78701",
    website: "bellavistasalon.com",
    services: "Haircuts, coloring, extensions, bridal styling",
    serviceAreas: "Austin, Round Rock, Cedar Park",
    logoUrl: "/uploads/bvs-logo.png",
    requirements: "Luxurious feel, Instagram feed integration, online booking.",
    brandColors: "#9B2C6E, #F0D4E8",
    createdAt: "2026-02-03",
  },
  {
    id: "ORD-003",
    businessName: "Sunrise Dental Care",
    email: "admin@sunrisedental.com",
    phone: "(407) 555-0234",
    plan: "Starter",
    status: "paid",
    industry: "Healthcare",
    address: "2200 Lake Eola Dr, Orlando, FL 32801",
    website: "",
    services: "General dentistry, cosmetic dentistry, orthodontics",
    serviceAreas: "Orlando, Winter Park, Kissimmee",
    logoUrl: "",
    requirements: "Clean, professional look. Patient portal link needed.",
    brandColors: "#2196F3, #FFFFFF",
    createdAt: "2026-02-18",
  },
  {
    id: "ORD-004",
    businessName: "Peak Fitness Studio",
    email: "hello@peakfitness.com",
    phone: "(720) 555-0311",
    plan: "Growth",
    status: "pending_payment",
    industry: "Fitness & Wellness",
    address: "550 Broadway, Denver, CO 80203",
    website: "peakfitnessstudio.com",
    services: "Personal training, group classes, nutrition coaching",
    serviceAreas: "Denver Metro",
    logoUrl: "/uploads/pf-logo.png",
    requirements: "Energetic design, class schedule integration, membership CTA.",
    brandColors: "#FF5722, #212121",
    createdAt: "2026-03-01",
  },
  {
    id: "ORD-005",
    businessName: "Oakwood Legal Group",
    email: "contact@oakwoodlegal.com",
    phone: "(617) 555-0455",
    plan: "Authority",
    status: "completed",
    industry: "Legal Services",
    address: "100 Federal St, Boston, MA 02110",
    website: "oakwoodlegal.com",
    services: "Family law, estate planning, business formation",
    serviceAreas: "Greater Boston, Cambridge, Brookline",
    logoUrl: "/uploads/olg-logo.png",
    requirements: "Professional and trustworthy feel. Attorney bios needed.",
    brandColors: "#1A3A5C, #C5975B",
    createdAt: "2026-01-22",
  },
  {
    id: "ORD-006",
    businessName: "Green Thumb Landscaping",
    email: "jobs@greenthumblandscaping.com",
    phone: "(503) 555-0567",
    plan: "Starter",
    status: "in_progress",
    industry: "Landscaping",
    address: "789 Division St, Portland, OR 97202",
    website: "",
    services: "Lawn care, garden design, tree trimming, hardscaping",
    serviceAreas: "Portland, Beaverton, Lake Oswego, Tigard",
    logoUrl: "",
    requirements: "Showcase portfolio of completed projects. Before/after gallery.",
    brandColors: "#4CAF50, #795548",
    createdAt: "2026-03-10",
  },
  {
    id: "ORD-007",
    businessName: "Harbor View Restaurant",
    email: "mgr@harborviewrestaurant.com",
    phone: "(206) 555-0678",
    plan: "Growth",
    status: "pending_payment",
    industry: "Restaurant & Food",
    address: "45 Waterfront Way, Seattle, WA 98101",
    website: "harborviewseattle.com",
    services: "Fine dining, private events, catering",
    serviceAreas: "Seattle, Bellevue",
    logoUrl: "/uploads/hvr-logo.png",
    requirements: "Menu integration, reservation system, event booking page.",
    brandColors: "#1A1A2E, #D4AF37",
    createdAt: "2026-03-15",
  },
  {
    id: "ORD-008",
    businessName: "Riverside Auto Repair",
    email: "service@riversideauto.com",
    phone: "(916) 555-0789",
    plan: "Basic",
    status: "canceled",
    industry: "Automotive",
    address: "3300 Riverside Blvd, Sacramento, CA 95820",
    website: "riversideautorepair.com",
    services: "Oil changes, brake service, engine diagnostics, tires",
    serviceAreas: "Sacramento, West Sacramento, Elk Grove",
    logoUrl: "/uploads/rar-logo.png",
    requirements: "Service pricing page, appointment scheduling.",
    brandColors: "#B71C1C, #EEEEEE",
    createdAt: "2026-02-28",
  },
  {
    id: "ORD-009",
    businessName: "Sunshine Daycare",
    email: "director@sunshinedaycare.com",
    phone: "(480) 555-0891",
    plan: "Starter",
    status: "paid",
    industry: "Childcare",
    address: "1025 E Camelback Rd, Phoenix, AZ 85014",
    website: "",
    services: "Infant care, toddler programs, preschool, after-school",
    serviceAreas: "Phoenix, Scottsdale, Tempe",
    logoUrl: "",
    requirements: "Warm, inviting design. Parent testimonials section. Tour booking.",
    brandColors: "#FF9800, #4FC3F7",
    createdAt: "2026-03-20",
  },
  {
    id: "ORD-010",
    businessName: "Elite Roofing Solutions",
    email: "info@eliteroofing.com",
    phone: "(972) 555-0923",
    plan: "Growth",
    status: "in_progress",
    industry: "Home Services",
    address: "4500 Preston Rd, Dallas, TX 75205",
    website: "eliteroofingdallas.com",
    services: "Roof repair, replacement, storm damage, inspections",
    serviceAreas: "Dallas, Fort Worth, Plano, Frisco, McKinney",
    logoUrl: "/uploads/ers-logo.png",
    requirements: "Storm damage CTA, free inspection form, financing info page.",
    brandColors: "#0D47A1, #FF6F00",
    createdAt: "2026-03-25",
  },
];

/* ─── Summary stats computation ───────────────────────────────────── */
function getStats(data: Order[]) {
  return {
    total: data.length,
    pendingPayment: data.filter((o) => o.status === "pending_payment").length,
    inProgress: data.filter((o) => o.status === "in_progress").length,
    completed: data.filter((o) => o.status === "completed").length,
  };
}

export default function AdminOrdersPage() {
  const [activeFilter, setActiveFilter] = useState<OrderStatus | "all">("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeFilter === "all"
      ? orders
      : orders.filter((o) => o.status === activeFilter);

  const stats = getStats(orders);

  const summaryCards = [
    {
      label: "Total Orders",
      value: stats.total,
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
      bg: "bg-teal-50",
      color: "text-teal-500",
    },
    {
      label: "Completed",
      value: stats.completed,
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
          <circle cx="10" cy="10" r="7.5" />
          <path d="M7 10l2 2 4-4" />
        </svg>
      ),
      bg: "bg-emerald-50",
      color: "text-emerald-500",
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
                {[
                  "Business Name",
                  "Email",
                  "Plan",
                  "Status",
                  "Industry",
                  "Created",
                  "Actions",
                ].map((heading) => (
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
                  <tr
                    className="transition-colors hover:bg-neutral-50/60"
                  >
                    <td
                      className="whitespace-nowrap px-5 py-4 font-medium text-neutral-900"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {order.businessName}
                    </td>
                    <td
                      className="whitespace-nowrap px-5 py-4 text-neutral-600"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {order.email}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className="inline-flex items-center rounded-md bg-brand-teal-50 px-2 py-0.5 text-xs font-medium text-brand-teal-700"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {order.plan}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <StatusBadge status={order.status} />
                    </td>
                    <td
                      className="whitespace-nowrap px-5 py-4 text-neutral-600"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {order.industry}
                    </td>
                    <td
                      className="whitespace-nowrap px-5 py-4 text-neutral-500"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <button
                        onClick={() =>
                          setExpandedId(
                            expandedId === order.id ? null : order.id,
                          )
                        }
                        className="text-sm font-medium text-brand-teal-500 transition-colors hover:text-brand-teal-700"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {expandedId === order.id ? "Hide" : "View"}
                      </button>
                    </td>
                  </tr>

                  {/* ── Expanded detail row ── */}
                  {expandedId === order.id && (
                    <tr key={`${order.id}-detail`} className="bg-neutral-50/50">
                      <td colSpan={7} className="px-5 py-6">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {[
                            { label: "Phone", value: order.phone },
                            { label: "Address", value: order.address },
                            {
                              label: "Website",
                              value: order.website || "Not provided",
                            },
                            { label: "Services", value: order.services },
                            {
                              label: "Service Areas",
                              value: order.serviceAreas,
                            },
                            {
                              label: "Logo",
                              value: order.logoUrl || "Not uploaded",
                            },
                            {
                              label: "Requirements",
                              value: order.requirements,
                            },
                            {
                              label: "Brand Colors",
                              value: order.brandColors,
                            },
                          ].map((field) => (
                            <div key={field.label}>
                              <p
                                className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1"
                                style={{ fontFamily: "var(--font-heading)" }}
                              >
                                {field.label}
                              </p>
                              <p
                                className="text-sm text-neutral-700"
                                style={{ fontFamily: "var(--font-sans)" }}
                              >
                                {field.value}
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
