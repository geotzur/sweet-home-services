const testimonials = [
  {
    quote:
      "Before Sweet Home Services, I was invisible online. Six months later I'm getting 15–20 new calls a month from Google. It paid for itself in the first week.",
    name: "Marcus T.",
    business: "Marcus's Plumbing Co.",
    location: "Austin, TX",
    industry: "Contractor",
    stars: 5,
    initials: "MT",
  },
  {
    quote:
      "The site they built for my salon is stunning. Clients comment on it all the time. And we show up first when people search 'hair salon near me' in our area.",
    name: "Diane R.",
    business: "Studio Diane",
    location: "Nashville, TN",
    industry: "Salon",
    stars: 5,
    initials: "DR",
  },
  {
    quote:
      "I was paying $800/mo to an agency with nothing to show for it. Sweet Home Services costs a third of that and I rank higher. Wish I'd found them sooner.",
    name: "Greg M.",
    business: "Millbrook Family Dental",
    location: "Columbus, OH",
    industry: "Dental",
    stars: 5,
    initials: "GM",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="#F5A623"
          aria-hidden="true"
        >
          <path d="M7.049 1.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L.98 7.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.293z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="py-20 sm:py-24"
      style={{ background: "#F9FAFB" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-overline mb-3">Client Stories</p>
          <h2
            id="testimonials-heading"
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Local Businesses{" "}
            <span style={{ color: "#1A6B6B" }}>Getting Found Every Day</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 flex flex-col gap-5"
              style={{
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.06)",
              }}
            >
              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <blockquote
                className="flex-1 text-neutral-700 leading-relaxed"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: "#1A6B6B" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-neutral-900 leading-tight"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-neutral-500 leading-tight mt-0.5"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8125rem",
                    }}
                  >
                    {t.business} · {t.location}
                  </p>
                </div>
                {/* Industry badge */}
                <span
                  className="ml-auto rounded-full px-2.5 py-0.5 text-xs font-semibold flex-shrink-0"
                  style={{
                    background: "#E6F3F3",
                    color: "#1A6B6B",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {t.industry}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under testimonials */}
        <div className="mt-12 text-center">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-150"
            style={{
              fontFamily: "var(--font-heading)",
              background: "#F5A623",
              color: "#111827",
              boxShadow: "0 4px 14px 0 rgb(245 166 35 / 0.30)",
            }}
          >
            Join 500+ Local Businesses
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 8a.5.5 0 01.5-.5h7.293L8.146 4.854a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L10.793 8.5H3.5A.5.5 0 013 8z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
