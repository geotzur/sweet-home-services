"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getSupabase } from "@/lib/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error: authError } = await getSupabase().auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message);
        setLoading(false);
        return;
      }

      router.replace("/admin");
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      {/* Subtle brand background gradient */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-teal-200), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--color-brand-amber-200), transparent 70%)",
          }}
        />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo + heading */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <svg
              width="36"
              height="36"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 15L16 6L26 15V27H20V20H12V27H6V15Z"
                fill="#1A6B6B"
              />
              <circle cx="16" cy="3" r="1.5" fill="#F5A623" />
              <path
                d="M13 1.5C10.5 3 9 5 9 7"
                stroke="#F5A623"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M19 1.5C21.5 3 23 5 23 7"
                stroke="#F5A623"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.7"
              />
            </svg>
            <span
              className="text-lg font-bold text-brand-teal-700"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Sweet Home Services
            </span>
          </Link>
          <h1
            className="mt-6 text-2xl font-bold text-neutral-900"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Admin Portal
          </h1>
          <p
            className="mt-2 text-sm text-neutral-500"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Sign in to manage clients and subscriptions
          </p>
        </div>

        {/* Login card */}
        <div className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error message */}
            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Email field */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-neutral-700"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@sweethomeservices.com"
                className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/20 focus:outline-none"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>

            {/* Password field */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-neutral-700"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-teal-500 focus:ring-2 focus:ring-brand-teal-500/20 focus:outline-none"
                style={{ fontFamily: "var(--font-sans)" }}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-lg bg-brand-teal-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-teal-600 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {loading ? (
                <>
                  <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
        </div>

        {/* Footer link */}
        <p className="mt-6 text-center text-xs text-neutral-400">
          <Link
            href="/"
            className="hover:text-brand-teal-500 transition-colors"
          >
            &larr; Back to website
          </Link>
        </p>
      </div>
    </div>
  );
}
