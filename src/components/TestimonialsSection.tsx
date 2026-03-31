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
    photo: "/images/testimonial-marcus.jpg",
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
    photo: "/images/testimonial-diane.jpg",
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
    photo: "/images/testimonial-greg.jpg",
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

function VerifiedBadge() {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold"
      style={{
        background: "#E6F3F3",
        color: "#1A6B6B",
        fontFamily: "var(--font-heading)",
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      Verified Customer
    </span>
  );
}

export default function TestimonialsSection() {
  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section
      className="py-20 sm:py-24"
      style={{
        background:
          "linear-gradient(180deg, #F0F7F7 0%, #F9FAFB 40%, #FFFBF3 100%)",
      }}
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

        {/* Featured + stacked layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured testimonial - takes 2/3 width */}
          <div
            className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col gap-5 sm:gap-6 relative overflow-hidden"
            style={{
              border: "1px solid #E5E7EB",
              borderLeft: "4px solid #F5A623",
              boxShadow:
                "0 8px 24px -4px rgb(0 0 0 / 0.08), 0 2px 6px -1px rgb(0 0 0 / 0.04)",
            }}
          >
            {/* Large decorative quote mark */}
            <svg
              className="absolute top-6 right-8 pointer-events-none"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              aria-hidden="true"
              style={{ opacity: 0.07 }}
            >
              <path
                d="M28 80c-8.8 0-16-7.2-16-16V52c0-17.6 14.4-32 32-32h4v12h-4c-11 0-20 9-20 20v4h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H28zm56 0c-8.8 0-16-7.2-16-16V52c0-17.6 14.4-32 32-32h4v12h-4c-11 0-20 9-20 20v4h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H84z"
                fill="#1A6B6B"
              />
            </svg>

            {/* Decorative quote mark (small, visible) */}
            <div style={{ color: "#1A6B6B" }} aria-hidden="true">
              <svg
                width="40"
                height="40"
                viewBox="0 0 120 120"
                fill="currentColor"
              >
                <path d="M28 80c-8.8 0-16-7.2-16-16V52c0-17.6 14.4-32 32-32h4v12h-4c-11 0-20 9-20 20v4h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H28zm56 0c-8.8 0-16-7.2-16-16V52c0-17.6 14.4-32 32-32h4v12h-4c-11 0-20 9-20 20v4h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H84z" />
              </svg>
            </div>

            {/* Stars */}
            <StarRating count={featured.stars} />

            {/* Quote */}
            <blockquote
              className="flex-1 text-neutral-800 leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.1875rem",
                lineHeight: 1.7,
              }}
            >
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="pt-5 border-t border-neutral-100">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                {featured.photo ? (
                  <img
                    src={featured.photo}
                    alt={featured.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: "#1A6B6B", fontSize: "0.9375rem" }}
                    aria-hidden="true"
                  >
                    {featured.initials}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-neutral-900 leading-tight"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    {featured.name}
                  </p>
                  <p
                    className="text-neutral-500 leading-tight mt-0.5 truncate"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                    }}
                  >
                    {featured.business} &middot; {featured.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <VerifiedBadge />
                <span
                  className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                  style={{
                    background: "#E6F3F3",
                    color: "#1A6B6B",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {featured.industry}
                </span>
              </div>
            </div>
          </div>

          {/* Stacked smaller testimonials - 1/3 width */}
          <div className="flex flex-col gap-6">
            {others.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 flex flex-col gap-4 flex-1"
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
                  {t.photo ? (
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: "#1A6B6B" }}
                      aria-hidden="true"
                    >
                      {t.initials}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
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
                      className="text-neutral-500 leading-tight mt-0.5 truncate"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                      }}
                    >
                      {t.business} &middot; {t.location}
                    </p>
                  </div>
                </div>
                {/* Badges row */}
                <div className="flex items-center gap-2">
                  <VerifiedBadge />
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
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
        </div>

        {/* CTA under testimonials */}
        <div className="mt-12 text-center">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold transition-all duration-150 w-full sm:w-auto"
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
