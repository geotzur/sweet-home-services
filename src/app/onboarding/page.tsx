"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useCallback, useMemo, useState } from "react";
import { getSupabase } from "@/lib/supabase-browser";

/* ------------------------------------------------------------------ */
/*  Plan config                                                       */
/* ------------------------------------------------------------------ */

const planPrices: Record<string, string> = {
  basic: "$89",
  starter: "$149",
  growth: "$299",
  authority: "$499",
};

const planNames: Record<string, string> = {
  basic: "Basic",
  starter: "Starter",
  growth: "Growth",
  authority: "Authority",
};

const INDUSTRIES = [
  "Contractors",
  "Salons & Spas",
  "Medical & Dental",
  "Restaurants",
  "Legal & Finance",
  "Pet Services",
  "Fitness & Wellness",
  "Home Services",
  "Other",
] as const;

const STEPS = [
  "Business Info",
  "Website & Services",
  "Brand & Requirements",
  "Review & Pay",
] as const;

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

interface FormData {
  /* Step 1 */
  businessName: string;
  contactEmail: string;
  phone: string;
  address: string;
  /* Step 2 */
  websiteUrl: string;
  industry: string;
  servicesProvided: string;
  areasCovered: string;
  /* Step 3 */
  logo: File | null;
  brandColors: string;
  specialRequirements: string;
}

const INITIAL_FORM: FormData = {
  businessName: "",
  contactEmail: "",
  phone: "",
  address: "",
  websiteUrl: "",
  industry: "",
  servicesProvided: "",
  areasCovered: "",
  logo: null,
  brandColors: "",
  specialRequirements: "",
};

/* ------------------------------------------------------------------ */
/*  Shared UI helpers                                                 */
/* ------------------------------------------------------------------ */

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-neutral-700"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {children}
      {required && <span className="ml-0.5 text-red-500">*</span>}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base sm:text-sm text-neutral-800 shadow-sm transition-colors placeholder:text-neutral-400 focus:border-[#1A6B6B] focus:outline-none focus:ring-2 focus:ring-[#1A6B6B]/20";

const selectClass =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-base sm:text-sm text-neutral-800 shadow-sm transition-colors focus:border-[#1A6B6B] focus:outline-none focus:ring-2 focus:ring-[#1A6B6B]/20";

/* ------------------------------------------------------------------ */
/*  Progress bar                                                      */
/* ------------------------------------------------------------------ */

function ProgressBar({ current }: { current: number }) {
  return (
    <div className="mb-8 sm:mb-10">
      {/* Step labels */}
      <div className="mb-3 flex justify-between">
        {STEPS.map((label, i) => {
          const done = i < current;
          const active = i === current;
          return (
            <div key={label} className="flex flex-col items-center flex-1">
              <div
                className="flex h-9 w-9 sm:h-8 sm:w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors"
                style={{
                  background: done ? "#1A6B6B" : active ? "#F5A623" : "#e5e7eb",
                  color: done || active ? "#fff" : "#6b7280",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {done ? "\u2713" : i + 1}
              </div>
              <span
                className="mt-1.5 hidden text-xs font-medium sm:block"
                style={{
                  color: active ? "#1A6B6B" : done ? "#1A6B6B" : "#9ca3af",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${((current + 1) / STEPS.length) * 100}%`,
            background: "linear-gradient(90deg, #1A6B6B 0%, #F5A623 100%)",
          }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Step components                                                   */
/* ------------------------------------------------------------------ */

function StepBusinessInfo({
  form,
  onChange,
  errors,
}: {
  form: FormData;
  onChange: (patch: Partial<FormData>) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="businessName" required>Business Name</Label>
        <input
          id="businessName"
          className={inputClass}
          placeholder="e.g. Joe&apos;s Plumbing"
          value={form.businessName}
          onChange={(e) => onChange({ businessName: e.target.value })}
        />
        {errors.businessName && <p className="mt-1 text-xs text-red-500">{errors.businessName}</p>}
      </div>

      <div>
        <Label htmlFor="contactEmail" required>Contact Email</Label>
        <input
          id="contactEmail"
          type="email"
          className={inputClass}
          placeholder="you@business.com"
          value={form.contactEmail}
          onChange={(e) => onChange({ contactEmail: e.target.value })}
        />
        {errors.contactEmail && <p className="mt-1 text-xs text-red-500">{errors.contactEmail}</p>}
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <input
          id="phone"
          type="tel"
          className={inputClass}
          placeholder="(555) 123-4567"
          value={form.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="address">Business Address</Label>
        <input
          id="address"
          className={inputClass}
          placeholder="123 Main St, Anytown, USA"
          value={form.address}
          onChange={(e) => onChange({ address: e.target.value })}
        />
      </div>
    </div>
  );
}

function StepWebsiteServices({
  form,
  onChange,
}: {
  form: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="websiteUrl">Current Website URL</Label>
        <input
          id="websiteUrl"
          type="url"
          className={inputClass}
          placeholder="https://example.com (leave blank if none)"
          value={form.websiteUrl}
          onChange={(e) => onChange({ websiteUrl: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="industry">Industry</Label>
        <select
          id="industry"
          className={selectClass}
          value={form.industry}
          onChange={(e) => onChange({ industry: e.target.value })}
        >
          <option value="">Select your industry</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Label htmlFor="servicesProvided">Services Provided</Label>
        <textarea
          id="servicesProvided"
          className={inputClass}
          rows={3}
          placeholder="What services does your business offer?"
          value={form.servicesProvided}
          onChange={(e) => onChange({ servicesProvided: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="areasCovered">Areas Covered</Label>
        <textarea
          id="areasCovered"
          className={inputClass}
          rows={3}
          placeholder="What cities or zip codes do you serve?"
          value={form.areasCovered}
          onChange={(e) => onChange({ areasCovered: e.target.value })}
        />
      </div>
    </div>
  );
}

function StepBrand({
  form,
  onChange,
}: {
  form: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
  return (
    <div className="space-y-5">
      <div>
        <Label htmlFor="logo">Logo Upload</Label>
        <input
          id="logo"
          type="file"
          accept="image/*"
          className="w-full text-sm text-neutral-600 file:mr-4 file:rounded-lg file:border-0 file:bg-[#1A6B6B]/10 file:px-4 file:py-3 file:text-sm file:font-medium file:text-[#1A6B6B] hover:file:bg-[#1A6B6B]/20 file:cursor-pointer file:transition-colors"
          onChange={(e) => onChange({ logo: e.target.files?.[0] || null })}
        />
        {form.logo && (
          <p className="mt-1 text-xs text-neutral-500">
            Selected: {form.logo.name}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="brandColors">Brand Colors</Label>
        <input
          id="brandColors"
          className={inputClass}
          placeholder="Any specific colors you&apos;d like? (e.g. Navy blue and gold)"
          value={form.brandColors}
          onChange={(e) => onChange({ brandColors: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="specialRequirements">Special Requirements / Notes</Label>
        <textarea
          id="specialRequirements"
          className={inputClass}
          rows={4}
          placeholder="Any other details or requirements for your website..."
          value={form.specialRequirements}
          onChange={(e) => onChange({ specialRequirements: e.target.value })}
        />
      </div>
    </div>
  );
}

function StepReview({ form, plan }: { form: FormData; plan: string }) {
  const name = planNames[plan] || plan;
  const price = planPrices[plan] || "—";

  const sections: { label: string; rows: [string, string][] }[] = [
    {
      label: "Business Information",
      rows: [
        ["Business Name", form.businessName],
        ["Contact Email", form.contactEmail],
        ["Phone", form.phone || "—"],
        ["Address", form.address || "—"],
      ],
    },
    {
      label: "Website & Services",
      rows: [
        ["Current Website", form.websiteUrl || "None"],
        ["Industry", form.industry || "—"],
        ["Services", form.servicesProvided || "—"],
        ["Areas Covered", form.areasCovered || "—"],
      ],
    },
    {
      label: "Brand & Requirements",
      rows: [
        ["Logo", form.logo ? form.logo.name : "None uploaded"],
        ["Brand Colors", form.brandColors || "—"],
        ["Special Requirements", form.specialRequirements || "—"],
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Plan highlight */}
      <div
        className="rounded-xl border-2 p-5 text-center"
        style={{ borderColor: "#F5A623", background: "rgba(245,166,35,0.06)" }}
      >
        <p className="text-sm font-medium text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
          Selected Plan
        </p>
        <p
          className="mt-1 text-2xl font-bold"
          style={{ color: "#1A6B6B", fontFamily: "var(--font-heading)" }}
        >
          {name}
        </p>
        <p
          className="text-lg font-semibold"
          style={{ color: "#F5A623", fontFamily: "var(--font-heading)" }}
        >
          {price}
          <span className="text-sm font-normal text-neutral-500">/mo</span>
        </p>
      </div>

      {/* Detail sections */}
      {sections.map((section) => (
        <div key={section.label} className="rounded-xl border border-neutral-200 bg-white p-5">
          <h3
            className="mb-3 text-sm font-semibold uppercase tracking-wide"
            style={{ color: "#1A6B6B", fontFamily: "var(--font-heading)" }}
          >
            {section.label}
          </h3>
          <dl className="space-y-2 text-sm" style={{ fontFamily: "var(--font-sans)" }}>
            {section.rows.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:flex-wrap gap-0.5 sm:gap-1">
                <dt className="font-medium text-neutral-600 sm:min-w-[140px]">{label}:</dt>
                <dd className="text-neutral-800 break-all">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main onboarding form                                              */
/* ------------------------------------------------------------------ */

function OnboardingForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plan = searchParams.get("plan") || "starter";

  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const planLabel = planNames[plan] || plan;

  const onChange = useCallback((patch: Partial<FormData>) => {
    setForm((prev) => ({ ...prev, ...patch }));
    // Clear field errors on change
    setErrors((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(patch)) delete next[key];
      return next;
    });
  }, []);

  /* Validation */
  const validate = useCallback((): boolean => {
    const e: Record<string, string> = {};
    if (step === 0) {
      if (!form.businessName.trim()) e.businessName = "Business name is required.";
      if (!form.contactEmail.trim()) {
        e.contactEmail = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) {
        e.contactEmail = "Enter a valid email address.";
      }
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [step, form.businessName, form.contactEmail]);

  const next = useCallback(() => {
    if (!validate()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }, [validate]);

  const prev = useCallback(() => setStep((s) => Math.max(s - 1, 0)), []);

  /* Submit */
  const handleSubmit = useCallback(async () => {
    setSubmitting(true);
    setSubmitError(null);

    try {
      const supabase = getSupabase();

      /* 1. Upload logo if present */
      let logoUrl: string | null = null;
      if (form.logo) {
        const ext = form.logo.name.split(".").pop() || "png";
        const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
        const { error: uploadErr } = await supabase.storage
          .from("order-logos")
          .upload(path, form.logo);
        if (uploadErr) {
          console.error("Logo upload error:", uploadErr);
          // Continue without logo rather than blocking the order
        } else {
          const { data: urlData } = supabase.storage
            .from("order-logos")
            .getPublicUrl(path);
          logoUrl = urlData.publicUrl;
        }
      }

      /* 2. Save order to Supabase */
      const { data: order, error: orderErr } = await supabase
        .from("orders")
        .insert({
          plan,
          status: "pending_payment",
          business_name: form.businessName,
          email: form.contactEmail,
          phone: form.phone || null,
          address: form.address || null,
          website_url: form.websiteUrl || null,
          industry: form.industry || null,
          services: form.servicesProvided || null,
          areas_covered: form.areasCovered || null,
          logo_url: logoUrl,
          brand_colors: form.brandColors || null,
          requirements: form.specialRequirements || null,
        })
        .select("id")
        .single();

      if (orderErr) {
        throw new Error(orderErr.message);
      }

      /* 3. Create Stripe checkout session */
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan, orderId: order.id }),
      });

      const data = (await res.json()) as { sessionUrl?: string; error?: string };

      if (!res.ok || !data.sessionUrl) {
        throw new Error(data.error || "Failed to create checkout session");
      }

      /* 4. Redirect to Stripe */
      window.location.href = data.sessionUrl;
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }, [form, plan]);

  /* Which step component */
  const stepContent = useMemo(() => {
    switch (step) {
      case 0:
        return <StepBusinessInfo form={form} onChange={onChange} errors={errors} />;
      case 1:
        return <StepWebsiteServices form={form} onChange={onChange} />;
      case 2:
        return <StepBrand form={form} onChange={onChange} />;
      case 3:
        return <StepReview form={form} plan={plan} />;
      default:
        return null;
    }
  }, [step, form, onChange, errors, plan]);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Top bar */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-4">
          <button
            onClick={() => router.push("/pricing")}
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-800"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            &larr; Back to Pricing
          </button>
          <span
            className="text-sm font-semibold"
            style={{ color: "#1A6B6B", fontFamily: "var(--font-heading)" }}
          >
            Sweet Home Services
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-6 sm:py-10">
        {/* Heading */}
        <h1
          className="mb-2 text-center text-2xl font-bold sm:text-3xl"
          style={{ color: "#1A6B6B", fontFamily: "var(--font-heading)" }}
        >
          Setting up your {planLabel} plan
        </h1>
        <p
          className="mb-8 text-center text-sm text-neutral-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {planPrices[plan]}/mo &middot; Step {step + 1} of {STEPS.length}
        </p>

        {/* Progress */}
        <ProgressBar current={step} />

        {/* Card */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <h2
            className="mb-5 text-lg font-semibold"
            style={{ color: "#1A6B6B", fontFamily: "var(--font-heading)" }}
          >
            {STEPS[step]}
          </h2>

          {stepContent}

          {/* Error message */}
          {submitError && (
            <div className="mt-5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {submitError}
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
            {step > 0 ? (
              <button
                type="button"
                onClick={prev}
                className="rounded-lg border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 w-full sm:w-auto"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Previous
              </button>
            ) : (
              <span className="hidden sm:block" />
            )}

            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={next}
                className="rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors hover:opacity-90 w-full sm:w-auto"
                style={{ background: "#1A6B6B", fontFamily: "var(--font-heading)" }}
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                disabled={submitting}
                onClick={handleSubmit}
                className="rounded-lg px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:opacity-90 disabled:opacity-60 w-full sm:w-auto"
                style={{
                  background: "#F5A623",
                  fontFamily: "var(--font-heading)",
                  cursor: submitting ? "wait" : "pointer",
                }}
              >
                {submitting ? "Processing\u2026" : "Proceed to Payment"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page wrapper (Suspense boundary for useSearchParams)              */
/* ------------------------------------------------------------------ */

export default function OnboardingPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-neutral-50">
          <p className="text-neutral-500" style={{ fontFamily: "var(--font-sans)" }}>
            Loading...
          </p>
        </div>
      }
    >
      <OnboardingForm />
    </Suspense>
  );
}
