/**
 * "Not sure which plan?" bottom CTA section.
 *
 * Design:
 *   - Light teal bg (#E6F3F3) panel, centered layout
 *   - Icon + heading + subtext
 *   - Two actions: "Book a free call" (primary teal button) + "Chat with us" (link)
 *   - Positioned between FAQ and Footer on the pricing page
 */
export default function PricingContactCta() {
  return (
    <section
      id="pricing-contact"
      className="py-16 sm:py-20"
      style={{ background: "#FFFFFF" }}
      aria-label="Not sure which plan"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl px-8 py-10 sm:px-12 sm:py-12 text-center"
          style={{ background: "#E6F3F3" }}
        >
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
            style={{ background: "#1A6B6B" }}
            aria-hidden="true"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Chat bubble */}
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
            </svg>
          </div>

          {/* Heading */}
          <h2
            className="text-neutral-900 leading-tight mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.5rem, 3vw, 1.875rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Not sure which plan is right for you?
          </h2>

          {/* Subtext */}
          <p
            className="text-neutral-600 leading-relaxed mb-8 mx-auto max-w-lg"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}
          >
            We&apos;ll match you to the right plan in a free 15-minute call. No
            sales pressure — just honest advice about what will actually move the
            needle for your business.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto rounded-xl px-7 py-3.5 font-semibold text-sm transition-colors duration-150"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.9375rem",
                background: "#1A6B6B",
                color: "#FFFFFF",
              }}
            >
              Book a free 15-min call
            </a>
            <a
              href="mailto:hello@sweethomeservices.org"
              className="w-full sm:w-auto rounded-xl px-7 py-3.5 font-semibold text-sm transition-colors duration-150"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.9375rem",
                background: "transparent",
                color: "#1A6B6B",
                border: "1.5px solid #1A6B6B",
              }}
            >
              Send us an email
            </a>
          </div>

          {/* Trust line */}
          <p
            className="mt-6 text-neutral-500"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem" }}
          >
            Typically reply within a few hours &middot; No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
