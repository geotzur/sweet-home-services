import Link from "next/link";

interface WebsiteExample {
  business: string;
  industry: string;
  location?: string;
  detailSlug: string;
  url: string;
  gradient: string;
}

const examples: WebsiteExample[] = [
  {
    business: "Fresh Flow Air Duct Cleaning",
    industry: "Home Services",
    location: "Lantana, FL",
    detailSlug: "home-services",
    url: "https://freshflowairductcleaning.services/",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
  },
  {
    business: "The Air Duct Guys",
    industry: "Home Services",
    location: "South Florida",
    detailSlug: "home-services",
    url: "https://airductcleaning.services/",
    gradient: "linear-gradient(135deg, #155656 0%, #1A6B6B 100%)",
  },
  {
    business: "Lint Savers Dryer Cleaning",
    industry: "Home Services",
    location: "South Florida",
    detailSlug: "home-services",
    url: "https://dryercleaningservices.com/",
    gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
  },
  {
    business: "ClingPool",
    industry: "Home Services",
    location: "Miami, FL",
    detailSlug: "home-services",
    url: "https://astounding-scone-95741c.netlify.app/",
    gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
  },
  {
    business: "Locksmith Luz",
    industry: "Home Services",
    location: "Los Angeles, CA",
    detailSlug: "home-services",
    url: "https://magenta-boba-a630b1.netlify.app/",
    gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
  },
  {
    business: "Locksmith Luck",
    industry: "Home Services",
    location: "Los Angeles, CA",
    detailSlug: "home-services",
    url: "https://willowy-babka-a0c492.netlify.app/",
    gradient: "linear-gradient(135deg, #155656 0%, #1A6B6B 100%)",
  },
  {
    business: "Fresh Flow Duct",
    industry: "Home Services",
    detailSlug: "home-services",
    url: "https://freshflowduct.netlify.app/",
    gradient: "linear-gradient(135deg, #2E9E7D 0%, #155656 100%)",
  },
  {
    business: "Catch My Mold",
    industry: "Home Services",
    detailSlug: "home-services",
    url: "https://catchmymold.com/",
    gradient: "linear-gradient(135deg, #1A6B6B 0%, #F5A623 100%)",
  },
  {
    business: "Dr. Chimney Sweep",
    industry: "Home Services",
    detailSlug: "home-services",
    url: "https://drchimney.netlify.app/",
    gradient: "linear-gradient(135deg, #1F2937 0%, #1A6B6B 100%)",
  },
];

function screenshotUrl(target: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(
    target,
  )}&screenshot=true&meta=false&embed=screenshot.url`;
}

function ExampleCard({ ex }: { ex: WebsiteExample }) {
  const urlDisplay = ex.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div className="group flex flex-col rounded-2xl bg-white shadow-sm border border-neutral-200 overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
      {/* Preview — whole area links to detail page */}
      <Link
        href={`/examples/${ex.detailSlug}`}
        className="block"
        aria-label={`See what's inside the ${ex.business} website`}
      >
        <div style={{ background: ex.gradient }} className="p-3 sm:p-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-black/25 px-2.5 py-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/80" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-400/80" />
              <div className="ml-1 flex-1 truncate rounded-full bg-white/20 px-2 py-0.5 text-[10px] text-white/80">
                {urlDisplay}
              </div>
            </div>

            {/* Live screenshot via Microlink */}
            <div className="relative aspect-[16/10] bg-white overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshotUrl(ex.url)}
                alt={`Screenshot of ${ex.business} website`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span
            className="inline-block rounded-full px-2 py-0.5 text-[11px] font-bold"
            style={{
              fontFamily: "var(--font-heading)",
              background: "#1A6B6B15",
              color: "#1A6B6B",
            }}
          >
            {ex.industry}
          </span>
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
            style={{
              fontFamily: "var(--font-heading)",
              background: "#2E9E7D20",
              color: "#1A6B6B",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "#2E9E7D" }}
            />
            Live
          </span>
        </div>

        <Link
          href={`/examples/${ex.detailSlug}`}
          className="text-neutral-900 leading-snug mb-1 hover:underline underline-offset-2 decoration-brand-teal-300"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "0.9375rem",
            fontWeight: 700,
          }}
        >
          {ex.business}
        </Link>

        {ex.location && (
          <p
            className="text-neutral-500 mb-4"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem" }}
          >
            {ex.location}
          </p>
        )}

        {/* CTAs */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-1">
          <Link
            href={`/examples/${ex.detailSlug}`}
            className="inline-flex items-center gap-1 font-semibold transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8125rem",
              color: "#1A6B6B",
            }}
          >
            See what&apos;s inside
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
              className="group-hover:translate-x-0.5 transition-transform"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2 6a.5.5 0 01.5-.5h5.793L6.146 3.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L8.293 6.5H2.5A.5.5 0 012 6z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <a
            href={ex.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.75rem",
            }}
            aria-label={`Visit ${ex.business} live site (opens in new tab)`}
          >
            Visit site
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M4 2h6v6M10 2L3 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteExamplesSection() {
  return (
    <section
      id="examples"
      className="py-20 sm:py-24"
      aria-labelledby="examples-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell overflow-hidden px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
          {/* Section header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-overline mb-3">Our Work</p>
            <h2
              id="examples-heading"
              className="text-neutral-900 leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              Real websites{" "}
              <span style={{ color: "#1A6B6B" }}>we&apos;ve built</span>
            </h2>
            <p
              className="mt-4 text-neutral-600 leading-relaxed"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem" }}
            >
              Click any preview to see what we built, what&apos;s included, and the features that make it convert.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {examples.map((ex) => (
              <ExampleCard key={ex.business} ex={ex} />
            ))}
          </div>

          {/* See more */}
          <div className="mt-10 text-center">
            <Link
              href="/examples"
              className="inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-sm font-semibold transition-all duration-150 hover:bg-brand-teal-50"
              style={{
                fontFamily: "var(--font-heading)",
                borderColor: "#1A6B6B",
                color: "#1A6B6B",
              }}
            >
              See the full portfolio
              <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M3 8a.5.5 0 01.5-.5h7.293L8.146 4.854a.5.5 0 11.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L10.793 8.5H3.5A.5.5 0 013 8z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
