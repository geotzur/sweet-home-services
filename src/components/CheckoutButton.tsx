"use client";

interface CheckoutButtonProps {
  planId: string;
  label: string;
  featured?: boolean;
}

export default function CheckoutButton({ planId, label, featured }: CheckoutButtonProps) {
  function handleClick() {
    window.location.href = `/onboarding?plan=${encodeURIComponent(planId)}`;
  }

  return (
    <div className="mb-7">
      <button
        onClick={handleClick}
        className="block w-full rounded-xl px-4 py-3.5 text-center font-semibold transition-all duration-150"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "0.9375rem",
          background: featured ? "#F5A623" : "#1A6B6B",
          color: featured ? "#111827" : "#FFFFFF",
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    </div>
  );
}
