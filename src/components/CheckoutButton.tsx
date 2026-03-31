"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  planId: string;
  label: string;
  featured?: boolean;
}

export default function CheckoutButton({ planId, label, featured }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });

      const data = (await res.json()) as { sessionUrl?: string; error?: string };

      if (!res.ok || !data.sessionUrl) {
        setError(data.error === "Missing Stripe configuration" ? "Checkout coming soon!" : "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      window.location.href = data.sessionUrl;
    } catch {
      setError("Checkout coming soon!");
      setLoading(false);
    }
  }

  return (
    <div className="mb-7">
      <button
        onClick={handleClick}
        disabled={loading}
        className="block w-full rounded-xl px-4 py-3.5 text-center font-semibold transition-all duration-150 disabled:opacity-60"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.9375rem",
          background: featured ? "#F5A623" : "#1A6B6B",
          color: featured ? "#111827" : "#FFFFFF",
          cursor: loading ? "wait" : "pointer",
        }}
      >
        {loading ? "Redirecting\u2026" : label}
      </button>
      {error && (
        <p className="mt-2 text-center text-sm" style={{ color: "#F5A623", fontFamily: "var(--font-sans)" }}>
          {error}
        </p>
      )}
    </div>
  );
}
