import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesSection() {
  return (
    <section
      className="py-16 sm:py-20 bg-transparent"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-overline mb-3">Case Studies</p>
          <h2
            id="case-studies-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
          >
            Real Results.{" "}
            <span style={{ color: "#1A6B6B" }}>Real Businesses.</span>
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", color: "#6B7280" }}
          >
            See how local businesses like yours grew their online presence and
            got more customers with Sweet Home Services.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Accent top bar */}
              <div
                className="h-1.5"
                style={{ backgroundColor: study.accentColor }}
                aria-hidden="true"
              />

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Industry + location */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: `${study.accentColor}15`,
                      color: study.accentColor,
                    }}
                  >
                    {study.industry}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "#9CA3AF",
                    }}
                  >
                    {study.location}
                  </span>
                </div>

                {/* Client name */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#1F2937",
                  }}
                >
                  {study.clientName}
                </h3>

                {/* Results pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium"
                      style={{
                        fontFamily: "var(--font-sans)",
                        backgroundColor: "#E6F3F3",
                        color: "#1A6B6B",
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8.5L6.5 12L13 4"
                          stroke="#1A6B6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {result}
                    </span>
                  ))}
                </div>

                {/* Challenge & solution */}
                <div className="space-y-3 mb-5">
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#9CA3AF",
                      }}
                    >
                      Challenge
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "#6B7280",
                      }}
                    >
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-wide mb-1"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#9CA3AF",
                      }}
                    >
                      Solution
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "#6B7280",
                      }}
                    >
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Pull quote */}
                <blockquote
                  className="mt-auto border-l-2 pl-4 py-2"
                  style={{ borderColor: study.accentColor }}
                >
                  <p
                    className="text-sm italic leading-relaxed"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "#374151",
                    }}
                  >
                    &ldquo;{study.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-neutral-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: study.accentColor }}
                    aria-hidden="true"
                  >
                    {study.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#1F2937",
                      }}
                    >
                      {study.ownerName}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: "#9CA3AF",
                      }}
                    >
                      {study.clientName} &middot; {study.location}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
