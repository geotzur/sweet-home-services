"use client";

import { useState } from "react";

interface CheckoutButtonProps {
  planId: string;
  label: string;
  featured?: boolean;
}

export default function CheckoutButton({ planId, label, featured }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });

      const data = (await res.json()) as { sessionUrl?: string; error?: string };

      if (!res.ok || !data.sessionUrl) {
        console.error("Checkout error:", data.error);
        setLoading(false);
        return;
      }

      window.location.href = data.sessionUrl;
    } catch (err) {
      console.error("Checkout error:", err);
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="block w-full rounded-xl px-4 py-3.5 text-center font-semibold transition-all duration-150 mb-7 disabled:opacity-60"
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
  );
}
