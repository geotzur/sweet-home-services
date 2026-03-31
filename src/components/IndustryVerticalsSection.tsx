import Image from "next/image";

const industries = [
  {
    name: "Contractors",
    examples: "Plumbers, HVAC, Electricians, Roofers",
    color: "#E6F3F3",
    slug: "contractors",
  },
  {
    name: "Salons & Spas",
    examples: "Hair, Nails, Massage, Skincare",
    color: "#FEF8EE",
    slug: "salons",
  },
  {
    name: "Medical & Dental",
    examples: "Dentists, Chiropractors, Urgent Care",
    color: "#E6F3F3",
    slug: "medical",
  },
  {
    name: "Restaurants",
    examples: "Diners, Catering, Food Trucks, Cafés",
    color: "#FEF8EE",
    slug: "restaurants",
  },
  {
    name: "Legal & Finance",
    examples: "Attorneys, Accountants, Advisors",
    color: "#E6F3F3",
    slug: "legal",
  },
  {
    name: "Pet Services",
    examples: "Groomers, Vets, Boarding, Training",
    color: "#FEF8EE",
    slug: "pet-services",
  },
  {
    name: "Fitness & Wellness",
    examples: "Gyms, Yoga Studios, Personal Trainers",
    color: "#E6F3F3",
    slug: "fitness",
  },
  {
    name: "Home Services",
    examples: "Cleaners, Landscapers, Pest Control",
    color: "#FEF8EE",
    slug: "home-services",
  },
];

export default function IndustryVerticalsSection() {
  return (
    <section
      id="industries"
      className="py-20 sm:py-24"
      aria-labelledby="industries-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell overflow-hidden px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-overline mb-3">Industries We Serve</p>
          <h2
            id="industries-heading"
            className="text-neutral-900 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.01em",
            }}
          >
            Built for{" "}
            <span style={{ color: "#1A6B6B" }}>Your Type of Business</span>
          </h2>
          <p
            className="mt-4 text-neutral-600 leading-relaxed"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1.0625rem" }}
          >
            Every site is designed around your industry&apos;s unique customers,
            conversion goals, and search intent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry) => (
            <a
              key={industry.slug}
              href={`#industries/${industry.slug}`}
              className="group rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 border border-transparent hover:border-brand-teal-200"
              style={{ background: industry.color }}
            >
              <Image
                src={`/icons/${industry.slug}.svg`}
                width={40}
                height={40}
                alt=""
                aria-hidden="true"
              />
              <div>
                <h3
                  className="text-neutral-900 leading-tight mb-1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {industry.name}
                </h3>
                <p
                  className="text-neutral-500 leading-snug"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                  }}
                >
                  {industry.examples}
                </p>
              </div>
              <span
                className="mt-auto flex items-center gap-1 font-medium transition-colors"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem",
                  color: "#1A6B6B",
                }}
              >
                See examples
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
              </span>
            </a>
          ))}
        </div>

        {/* "Don't see your industry?" */}
        <p
          className="mt-8 text-center text-neutral-500"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem" }}
        >
          Don&apos;t see your industry?{" "}
          <a
            href="#contact"
            className="font-medium underline underline-offset-2"
            style={{ color: "#1A6B6B" }}
          >
            We likely serve it — ask us.
          </a>
        </p>
        </div>
      </div>
    </section>
  );
}
