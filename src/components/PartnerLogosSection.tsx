import { partnersSection } from "@/data/partners";

export default function PartnerLogosSection() {
  return (
    <section
      className="py-12 sm:py-16 bg-transparent"
      aria-labelledby="partners-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "#F5A623",
            }}
          >
            {partnersSection.overline}
          </p>
          <h2
            id="partners-heading"
            className="text-xl sm:text-2xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "#1F2937" }}
          >
            {partnersSection.headline}
          </h2>
          <p
            className="mt-2 text-sm leading-relaxed max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-sans)", color: "#9CA3AF" }}
          >
            {partnersSection.subheadline}
          </p>
        </div>

        {/* Partner badges — horizontal scrolling on mobile, wrapped on desktop */}
        <div className="flex flex-nowrap lg:flex-wrap justify-start lg:justify-center gap-3 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
          {partnersSection.partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-150 hover:shadow-md hover:-translate-y-0.5 border"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundColor: "#F9FAFB",
                borderColor: "#E5E7EB",
                color: "#374151",
              }}
            >
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                style={{ backgroundColor: "#1A6B6B" }}
                aria-hidden="true"
              >
                {partner.abbrev.charAt(0)}
              </span>
              {partner.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
