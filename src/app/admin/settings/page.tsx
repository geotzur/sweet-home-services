"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div>
      <div className="mb-8">
        <h1
          className="text-2xl font-bold text-neutral-900"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Settings
        </h1>
        <p
          className="mt-1 text-sm text-neutral-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Manage your account and business configuration
        </p>
      </div>

      <div className="space-y-8 max-w-2xl">
        {/* Business Info */}
        <form onSubmit={handleSave}>
          <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-100">
              <h2
                className="text-base font-semibold text-neutral-900"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Business Information
              </h2>
            </div>
            <div className="px-6 py-5 space-y-5">
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  defaultValue="Sweet Home Services"
                  className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Support Email
                </label>
                <input
                  type="email"
                  defaultValue="hello@sweethomeservices.com"
                  className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-neutral-700 mb-1.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="(555) 123-4567"
                  className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand-teal-500 focus:outline-none focus:ring-1 focus:ring-brand-teal-500"
                  style={{ fontFamily: "var(--font-sans)" }}
                />
              </div>
            </div>
            <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between">
              {saved && (
                <p className="text-sm font-medium text-emerald-600" style={{ fontFamily: "var(--font-sans)" }}>
                  Settings saved successfully
                </p>
              )}
              {!saved && <span />}
              <button
                type="submit"
                className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-600"
                style={{ fontFamily: "var(--font-heading)", background: "#1A6B6B" }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>

        {/* Integrations */}
        <div className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
          <div className="px-6 py-4 border-b border-neutral-100">
            <h2
              className="text-base font-semibold text-neutral-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Integrations
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {[
              {
                name: "Stripe",
                description: "Payment processing and subscriptions",
                status: "Connected",
                connected: true,
              },
              {
                name: "Supabase",
                description: "Database and authentication",
                status: "Connected",
                connected: true,
              },
              {
                name: "Google Analytics",
                description: "Website traffic and behavior tracking",
                status: "Not connected",
                connected: false,
              },
              {
                name: "Google Search Console",
                description: "SEO performance and indexing",
                status: "Not connected",
                connected: false,
              },
            ].map((integration) => (
              <div key={integration.name} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                    {integration.name}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                    {integration.description}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                    integration.connected
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      integration.connected ? "bg-emerald-500" : "bg-neutral-400"
                    }`}
                  />
                  {integration.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-xl border border-red-200 bg-white overflow-hidden">
          <div className="px-6 py-4 border-b border-red-100">
            <h2
              className="text-base font-semibold text-red-700"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Danger Zone
            </h2>
          </div>
          <div className="px-6 py-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>
                Delete Account
              </p>
              <p className="text-xs text-neutral-500 mt-0.5" style={{ fontFamily: "var(--font-sans)" }}>
                Permanently remove your account and all associated data
              </p>
            </div>
            <button
              className="rounded-lg border border-red-300 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
