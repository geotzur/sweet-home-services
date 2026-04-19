"use client";

import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────────── */
/*  Shared browser frame                                                */
/* ─────────────────────────────────────────────────────────────────── */

function BrowserFrame({
  url,
  gradient,
  children,
}: {
  url: string;
  gradient: string;
  children: ReactNode;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg"
      style={{ background: gradient }}
    >
      <div className="p-3">
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Browser chrome */}
          <div
            className="px-2 py-1.5 flex items-center gap-1"
            style={{ background: "#F3F4F6" }}
          >
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <div
              className="ml-1.5 flex-1 truncate rounded-full px-2 py-0.5 text-[9px] text-neutral-500"
              style={{ background: "#FFFFFF", border: "1px solid #E5E7EB" }}
            >
              {url}
            </div>
          </div>

          {/* Page content */}
          <div className="h-[180px] p-3 overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/*  Individual page mocks                                               */
/* ─────────────────────────────────────────────────────────────────── */

function HomePageMock() {
  return (
    <div className="space-y-2">
      <div
        className="h-3 w-20 rounded"
        style={{ background: "#F5A623" }}
      />
      <div className="h-4 w-5/6 rounded" style={{ background: "#1F2937" }} />
      <div className="h-3 w-3/4 rounded" style={{ background: "#9CA3AF" }} />
      <div className="flex gap-1.5 pt-1">
        <div
          className="h-6 w-16 rounded"
          style={{ background: "#1A6B6B" }}
        />
        <div
          className="h-6 w-14 rounded border"
          style={{ borderColor: "#E5E7EB" }}
        />
      </div>
      <div className="grid grid-cols-3 gap-1 pt-1">
        <div className="h-8 rounded" style={{ background: "#E6F3F3" }} />
        <div className="h-8 rounded" style={{ background: "#FEF8EE" }} />
        <div className="h-8 rounded" style={{ background: "#E6F3F3" }} />
      </div>
    </div>
  );
}

function ServicesMock() {
  return (
    <div className="space-y-2">
      <div
        className="h-3 w-16 rounded"
        style={{ background: "#1A6B6B" }}
      />
      <div className="grid grid-cols-2 gap-1.5 pt-0.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="rounded p-2 space-y-1"
            style={{ background: "#F9FAFB" }}
          >
            <div
              className="h-3 w-3 rounded-sm"
              style={{ background: "#1A6B6B" }}
            />
            <div className="h-2 w-full rounded" style={{ background: "#D1D5DB" }} />
            <div className="h-1.5 w-3/4 rounded" style={{ background: "#E5E7EB" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ServiceAreasMock() {
  return (
    <div className="space-y-1.5">
      <div className="h-2.5 w-20 rounded" style={{ background: "#1A6B6B" }} />
      <div
        className="relative h-20 rounded overflow-hidden"
        style={{ background: "#E6F3F3" }}
      >
        {/* Map-like grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#1A6B6B33 1px,transparent 1px),linear-gradient(90deg,#1A6B6B33 1px,transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Pins */}
        <div
          className="absolute top-3 left-4 w-2 h-2 rounded-full"
          style={{ background: "#F5A623" }}
        />
        <div
          className="absolute top-8 left-12 w-2 h-2 rounded-full"
          style={{ background: "#F5A623" }}
        />
        <div
          className="absolute bottom-3 right-6 w-2 h-2 rounded-full"
          style={{ background: "#F5A623" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="h-2 rounded" style={{ background: "#D1D5DB" }} />
        <div className="h-2 rounded" style={{ background: "#D1D5DB" }} />
      </div>
    </div>
  );
}

function ContactMock() {
  return (
    <div className="space-y-1.5">
      <div className="h-2.5 w-14 rounded" style={{ background: "#1A6B6B" }} />
      <div className="grid grid-cols-2 gap-1.5">
        <div
          className="h-6 rounded border"
          style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
        />
        <div
          className="h-6 rounded border"
          style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
        />
      </div>
      <div
        className="h-6 rounded border"
        style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
      />
      <div
        className="h-12 rounded border"
        style={{ background: "#F9FAFB", borderColor: "#E5E7EB" }}
      />
      <div
        className="h-6 w-20 rounded"
        style={{ background: "#1A6B6B" }}
      />
    </div>
  );
}

function AboutMock() {
  return (
    <div className="space-y-2">
      <div className="h-2.5 w-14 rounded" style={{ background: "#1A6B6B" }} />
      <div className="flex gap-2">
        <div
          className="h-16 w-16 rounded"
          style={{ background: "#E6F3F3" }}
        />
        <div className="flex-1 space-y-1 py-1">
          <div
            className="h-2 w-full rounded"
            style={{ background: "#D1D5DB" }}
          />
          <div
            className="h-2 w-5/6 rounded"
            style={{ background: "#E5E7EB" }}
          />
          <div
            className="h-2 w-3/4 rounded"
            style={{ background: "#E5E7EB" }}
          />
        </div>
      </div>
      <div className="flex gap-1 pt-1">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-5 w-5 rounded-full"
            style={{ background: "#D1E8E8" }}
          />
        ))}
      </div>
    </div>
  );
}

function BlogMock() {
  return (
    <div className="space-y-1.5">
      <div className="h-2.5 w-10 rounded" style={{ background: "#1A6B6B" }} />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="flex gap-1.5 p-1.5 rounded"
          style={{ background: "#F9FAFB" }}
        >
          <div
            className="h-10 w-12 flex-shrink-0 rounded"
            style={{
              background: i === 0 ? "#1A6B6B" : i === 1 ? "#F5A623" : "#2E9E7D",
            }}
          />
          <div className="flex-1 space-y-0.5 py-0.5">
            <div
              className="h-2 w-full rounded"
              style={{ background: "#374151" }}
            />
            <div
              className="h-1.5 w-3/4 rounded"
              style={{ background: "#D1D5DB" }}
            />
            <div
              className="h-1.5 w-1/2 rounded"
              style={{ background: "#E5E7EB" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ReviewsMock() {
  return (
    <div className="space-y-1.5">
      <div className="h-2.5 w-14 rounded" style={{ background: "#1A6B6B" }} />
      {[0, 1].map((i) => (
        <div
          key={i}
          className="p-1.5 rounded space-y-1"
          style={{ background: "#FEF8EE" }}
        >
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((s) => (
              <svg
                key={s}
                width="8"
                height="8"
                viewBox="0 0 16 16"
                fill="#F5A623"
                aria-hidden="true"
              >
                <path d="M8 0l2.47 4.94L16 5.83l-4 3.86.94 5.47L8 12.5l-4.94 2.66.94-5.47-4-3.86 5.53-.89L8 0z" />
              </svg>
            ))}
          </div>
          <div className="h-1.5 w-full rounded" style={{ background: "#D4881A55" }} />
          <div className="h-1.5 w-5/6 rounded" style={{ background: "#D4881A33" }} />
          <div className="flex items-center gap-1 pt-0.5">
            <div
              className="h-3 w-3 rounded-full"
              style={{ background: "#D4881A" }}
            />
            <div
              className="h-1.5 w-10 rounded"
              style={{ background: "#D4881A55" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalyticsMock() {
  const bars = [30, 45, 35, 55, 50, 70, 65, 85, 80, 95];
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-16 rounded" style={{ background: "#1A6B6B" }} />
        <div
          className="h-2 w-10 rounded-full"
          style={{ background: "#22C55E" }}
        />
      </div>
      {/* Stat tiles */}
      <div className="grid grid-cols-3 gap-1">
        {[
          { v: "47", c: "#1A6B6B" },
          { v: "12", c: "#F5A623" },
          { v: "2.4k", c: "#2E9E7D" },
        ].map((s, i) => (
          <div
            key={i}
            className="rounded p-1 space-y-0.5"
            style={{ background: "#F9FAFB" }}
          >
            <div
              className="text-[9px] font-bold leading-none"
              style={{ color: s.c, fontFamily: "var(--font-heading)" }}
            >
              {s.v}
            </div>
            <div
              className="h-1 w-full rounded"
              style={{ background: "#E5E7EB" }}
            />
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="flex items-end gap-0.5 h-14 pt-1">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background:
                i >= 7
                  ? "linear-gradient(180deg, #F5A623, #D4881A)"
                  : "#D1E8E8",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/*  Page data                                                           */
/* ─────────────────────────────────────────────────────────────────── */

const pages = [
  {
    title: "Home Page",
    description: "Hero, CTAs, trust signals — built to convert.",
    url: "yourbusiness.com",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
    mock: <HomePageMock />,
  },
  {
    title: "Service Pages",
    description: "One page per service, SEO-optimized.",
    url: "yourbusiness.com/services",
    gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
    mock: <ServicesMock />,
  },
  {
    title: "Service Area Pages",
    description: "A dedicated page for every city you serve.",
    url: "yourbusiness.com/areas/los-angeles",
    gradient: "linear-gradient(135deg, #155656 0%, #1A6B6B 100%)",
    mock: <ServiceAreasMock />,
  },
  {
    title: "Contact Page",
    description: "Form, phone, WhatsApp, map — all in one.",
    url: "yourbusiness.com/contact",
    gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
    mock: <ContactMock />,
  },
  {
    title: "About Page",
    description: "Your story, team, and what makes you different.",
    url: "yourbusiness.com/about",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #155656 100%)",
    mock: <AboutMock />,
  },
  {
    title: "Blog",
    description: "Content that ranks and brings in organic traffic.",
    url: "yourbusiness.com/blog",
    gradient: "linear-gradient(135deg, #D4881A 0%, #F5A623 100%)",
    mock: <BlogMock />,
  },
  {
    title: "Reviews & Testimonials",
    description: "Social proof that turns visitors into customers.",
    url: "yourbusiness.com/reviews",
    gradient: "linear-gradient(135deg, #2E9E7D 0%, #155656 100%)",
    mock: <ReviewsMock />,
  },
  {
    title: "Analytics Dashboard",
    description: "See leads, calls, traffic, and rankings — all live.",
    url: "yourbusiness.com/dashboard",
    gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
    mock: <AnalyticsMock />,
  },
];

/* ─────────────────────────────────────────────────────────────────── */
/*  Section                                                             */
/* ─────────────────────────────────────────────────────────────────── */

export default function WhatYouGetSection() {
  return (
    <section
      id="what-you-get"
      className="py-20 sm:py-24"
      style={{ background: "#F9FAFB" }}
      aria-labelledby="what-you-get-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="section-overline mb-4">What&apos;s Included</p>
          <h2
            id="what-you-get-heading"
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Every plan includes{" "}
            <span style={{ color: "#1A6B6B" }}>everything you need</span>
          </h2>
          <p
            className="mt-4 text-neutral-600 leading-relaxed mx-auto"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.0625rem",
              maxWidth: "640px",
            }}
          >
            A complete, professional website plus an analytics dashboard —
            so you can see leads, calls, and rankings all in one place.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pages.map((p) => (
            <div key={p.title} className="flex flex-col">
              <BrowserFrame url={p.url} gradient={p.gradient}>
                {p.mock}
              </BrowserFrame>
              <div className="mt-4 px-1">
                <h3
                  className="text-base font-bold text-neutral-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-1 text-sm text-neutral-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
