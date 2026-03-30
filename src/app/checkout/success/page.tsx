import type { Metadata } from "next";
import { getStripe } from "@/lib/stripe";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Welcome to Sweet Home Services!",
  description: "Your subscription is confirmed. We'll be in touch within 24 hours.",
  robots: { index: false, follow: false },
};

const PLAN_LABELS: Record<string, string> = {
  starter: "Starter",
  growth: "Growth",
  authority: "Authority",
};

async function getSessionDetails(sessionId: string) {
  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId);
    const plan = session.metadata?.plan ?? null;
    const customerEmail =
      session.customer_details?.email ?? session.customer_email ?? null;
    return { plan, customerEmail, status: session.status };
  } catch {
    return null;
  }
}

export default async function CheckoutSuccessPage(props: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const searchParams = await props.searchParams;
  const sessionId = searchParams.session_id;
  const details = sessionId ? await getSessionDetails(sessionId) : null;

  const planLabel = details?.plan ? PLAN_LABELS[details.plan] ?? details.plan : null;

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #E6F3F3 0%, #FFFFFF 50%, #FEF3E2 100%)",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          textAlign: "center",
          background: "#FFFFFF",
          borderRadius: "16px",
          padding: "48px 32px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
      >
        {/* Checkmark icon */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "#1A6B6B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#111827",
            margin: "0 0 12px",
            lineHeight: 1.3,
          }}
        >
          You&rsquo;re in!
        </h1>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.0625rem",
            color: "#4B5563",
            margin: "0 0 8px",
            lineHeight: 1.6,
          }}
        >
          Welcome to Sweet Home Services.
          {planLabel && (
            <>
              {" "}
              Your <strong style={{ color: "#1A6B6B" }}>{planLabel}</strong> plan
              is now active.
            </>
          )}
        </p>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.0625rem",
            color: "#4B5563",
            margin: "0 0 32px",
            lineHeight: 1.6,
          }}
        >
          We&rsquo;ll be in touch within 24 hours to get your project started.
          {details?.customerEmail && (
            <>
              {" "}
              Look for a confirmation at{" "}
              <strong>{details.customerEmail}</strong>.
            </>
          )}
        </p>

        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "0.9375rem",
            background: "#1A6B6B",
            color: "#FFFFFF",
            padding: "12px 28px",
            borderRadius: "10px",
            textDecoration: "none",
            transition: "background 150ms",
          }}
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  );
}
