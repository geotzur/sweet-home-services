import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

/* ─── Industry data ──────────────────────────────────────────────── */

interface Example {
  business: string;
  location: string;
  result: string;
  features: string[];
  gradient: string;
  url?: string;
}

interface IndustryData {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  examples: Example[];
}

const industries: Record<string, IndustryData> = {
  contractors: {
    name: "Contractors",
    tagline: "Websites That Generate Leads While You Work",
    description:
      "From plumbers to roofers, contractor websites need to convert fast. We build mobile-first sites with click-to-call, service area pages, and SEO-optimized content that connects you with the right customers.",
    icon: "/icons/contractors.svg",
    examples: [
      {
        business: "Austin Elite Plumbing",
        location: "Austin, TX",
        result: "30-page website with 12 service area pages delivered",
        features: [
          "Emergency service CTA",
          "Service area pages for 12 cities",
          "Online booking integration",
          "Google Business Profile optimization",
        ],
        gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
      },
      {
        business: "Summit Roofing Co.",
        location: "Nashville, TN",
        result: "Storm damage landing page with instant quote form",
        features: [
          "Storm damage landing page",
          "Before/after project gallery",
          "Free inspection request form",
          "Financing information page",
        ],
        gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
      },
      {
        business: "Apex HVAC Solutions",
        location: "Charlotte, NC",
        result: "23 booked appointments in first month",
        features: [
          "Seasonal maintenance specials",
          "24/7 emergency service badge",
          "Service area map with zip codes",
          "Customer testimonial carousel",
        ],
        gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
      },
      {
        business: "ProWire Electric",
        location: "Tampa, FL",
        result: "Full website with blog and safety tips resource center",
        features: [
          "Residential & commercial service pages",
          "Licensed & insured trust badges",
          "Instant quote request form",
          "Blog with electrical safety tips",
        ],
        gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
      },
    ],
  },
  salons: {
    name: "Salons & Spas",
    tagline: "Beautiful Websites for Beautiful Businesses",
    description:
      "Your website should feel as polished as your services. We create elegant, Instagram-worthy salon and spa sites with online booking, gallery showcases, and local SEO that attracts new clients.",
    icon: "/icons/salons.svg",
    examples: [
      {
        business: "Bella Luxe Salon & Spa",
        location: "Denver, CO",
        result: "Stunning website with integrated booking system",
        features: [
          "Online appointment booking",
          "Instagram feed integration",
          "Stylist profiles with portfolios",
          "Gift card & membership options",
        ],
        gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
      },
      {
        business: "Serenity Day Spa",
        location: "Scottsdale, AZ",
        result: "+62% new client bookings in 3 months",
        features: [
          "Service menu with pricing",
          "Virtual spa tour page",
          "Bridal & group packages",
          "Client review showcase",
        ],
        gradient: "linear-gradient(135deg, #1A6B6B 0%, #155656 100%)",
      },
      {
        business: "Polished Nails Studio",
        location: "Miami, FL",
        result: "Mobile-first site with real-time availability display",
        features: [
          "Nail art gallery with filters",
          "Mobile-first design for on-the-go bookings",
          "Loyalty program sign-up",
          "Real-time availability display",
        ],
        gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
      },
    ],
  },
  medical: {
    name: "Medical & Dental",
    tagline: "Professional Websites That Build Patient Trust",
    description:
      "Healthcare websites need to convey trust, expertise, and accessibility. We build HIPAA-aware, professional sites with patient portals, appointment booking, and SEO best practices that make your practice easy to find.",
    icon: "/icons/medical.svg",
    examples: [
      {
        business: "Bright Smile Dental",
        location: "Phoenix, AZ",
        result: "47 new patient inquiries in first month",
        features: [
          "New patient forms online",
          "Insurance accepted page",
          "Doctor bio & credentials",
          "Before/after smile gallery",
        ],
        gradient: "linear-gradient(135deg, #1A6B6B 0%, #155656 100%)",
      },
      {
        business: "AlignWell Chiropractic",
        location: "San Diego, CA",
        result: "Condition-specific pages with patient education content",
        features: [
          "Condition-specific landing pages",
          "Patient testimonial videos",
          "Online appointment scheduling",
          "Blog with wellness tips",
        ],
        gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
      },
      {
        business: "Rapid Response Urgent Care",
        location: "Orlando, FL",
        result: "Multi-location site with real-time wait time display",
        features: [
          "Real-time wait time display",
          "Walk-in hours & directions",
          "Services & pricing transparency",
          "Multi-location pages",
        ],
        gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
      },
    ],
  },
  restaurants: {
    name: "Restaurants",
    tagline: "Websites That Fill Tables and Drive Orders",
    description:
      "Your restaurant website should make people hungry. We build mouth-watering sites with online menus, reservation systems, and local SEO that gets diners through the door.",
    icon: "/icons/restaurants.svg",
    examples: [
      {
        business: "Tony's Trattoria",
        location: "Portland, OR",
        result: "+28% online reservations month-over-month",
        features: [
          "Interactive menu with photos",
          "OpenTable reservation widget",
          "Private event booking page",
          "Catering inquiry form",
        ],
        gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
      },
      {
        business: "Smokestack BBQ",
        location: "Kansas City, MO",
        result: "Online orders up 45% in first quarter",
        features: [
          "Online ordering integration",
          "Food truck schedule & location tracker",
          "Catering menu & quote builder",
          "Instagram food gallery",
        ],
        gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
      },
      {
        business: "Harbor Brew Cafe",
        location: "Seattle, WA",
        result: "Full website with daily specials and loyalty program",
        features: [
          "Daily specials board",
          "Loyalty program sign-up",
          "Location & hours with map",
          "Customer review highlights",
        ],
        gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
      },
    ],
  },
  legal: {
    name: "Legal & Finance",
    tagline: "Authoritative Websites That Win Client Trust",
    description:
      "Legal and financial services demand professionalism and credibility. We build authoritative websites with attorney profiles, practice area pages, and SEO-optimized content that establishes your authority.",
    icon: "/icons/legal.svg",
    examples: [
      {
        business: "Parker & Associates Law",
        location: "Charlotte, NC",
        result: "Practice area pages with consultation booking system",
        features: [
          "Practice area landing pages",
          "Attorney bio & credentials",
          "Free consultation booking",
          "Case results showcase",
        ],
        gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
      },
      {
        business: "Oakwood Financial Advisors",
        location: "Boston, MA",
        result: "34 qualified leads per month from website forms",
        features: [
          "Service breakdown by client type",
          "Retirement planning calculator",
          "Team profiles with certifications",
          "Educational blog & resources",
        ],
        gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
      },
      {
        business: "Greenfield Tax & Accounting",
        location: "Dallas, TX",
        result: "Doubled new client inquiries in tax season",
        features: [
          "Seasonal tax prep landing pages",
          "Client portal link",
          "Service pricing transparency",
          "Google review integration",
        ],
        gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
      },
    ],
  },
  "pet-services": {
    name: "Pet Services",
    tagline: "Websites Pet Owners Love and Trust",
    description:
      "Pet parents are passionate — your website should match that energy. We build warm, trustworthy sites with booking systems, pet galleries, and local SEO that makes you the go-to in your area.",
    icon: "/icons/pet-services.svg",
    examples: [
      {
        business: "Paws & Claws Grooming",
        location: "Austin, TX",
        result: "+95% increase in online bookings",
        features: [
          "Breed-specific grooming packages",
          "Before/after pet gallery",
          "Online appointment scheduler",
          "Loyalty rewards program page",
        ],
        gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
      },
      {
        business: "Happy Tails Boarding",
        location: "Denver, CO",
        result: "Fully booked every holiday season since launch",
        features: [
          "Virtual kennel tour",
          "Webcam access for pet parents",
          "Vaccination requirement info",
          "Client testimonials with pet photos",
        ],
        gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
      },
      {
        business: "AllPets Veterinary Clinic",
        location: "Raleigh, NC",
        result: "Full clinic website with online registration and pet health blog",
        features: [
          "Emergency care hours & info",
          "New patient registration online",
          "Service & pricing transparency",
          "Pet health resource blog",
        ],
        gradient: "linear-gradient(135deg, #1A6B6B 0%, #155656 100%)",
      },
    ],
  },
  fitness: {
    name: "Fitness & Wellness",
    tagline: "High-Energy Websites That Drive Memberships",
    description:
      "Fitness websites need to inspire action. We build energetic, conversion-focused sites with class schedules, membership CTAs, and SEO-optimized content that drives membership sign-ups.",
    icon: "/icons/fitness.svg",
    examples: [
      {
        business: "Peak Fitness Studio",
        location: "Denver, CO",
        result: "+120% membership sign-ups in 3 months",
        features: [
          "Class schedule integration",
          "Free trial sign-up form",
          "Trainer profiles & certifications",
          "Membership comparison page",
        ],
        gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
      },
      {
        business: "Sunrise Yoga Studio",
        location: "San Diego, CA",
        result: "42 new members in first month from website",
        features: [
          "Class timetable with booking",
          "Instructor bio pages",
          "Workshop & retreat promotions",
          "Student testimonial wall",
        ],
        gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
      },
      {
        business: "Iron Peak CrossFit",
        location: "Chicago, IL",
        result: "Community-driven website with WOD feed and booking",
        features: [
          "WOD (Workout of the Day) feed",
          "Free intro class booking",
          "Community photo gallery",
          "Pricing & drop-in rates",
        ],
        gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
      },
    ],
  },
  "home-services": {
    name: "Home Services",
    tagline: "Websites That Keep Your Phone Ringing",
    description:
      "Cleaners, landscapers, duct cleaners, and pest control pros need websites that convert visitors into calls. We build trust-focused sites with service area coverage, instant quote forms, and SEO-optimized pages that keep your phone ringing.",
    icon: "/icons/home-services.svg",
    examples: [
      {
        business: "Fresh Flow Air Duct Cleaning",
        location: "Lantana, FL",
        result:
          "Local-SEO site with service area pages across South Florida",
        features: [
          "Service area pages for multiple cities",
          "Click-to-call in the header",
          "Instant quote request form",
          "Trust badges and reviews section",
        ],
        gradient: "linear-gradient(135deg, #1A6B6B 0%, #2E9E7D 100%)",
        url: "https://freshflowairductcleaning.services/",
      },
      {
        business: "The Air Duct Guys",
        location: "South Florida",
        result: "Conversion-focused site with instant quote form",
        features: [
          "Branded home page with bold CTA",
          "Services breakdown with pricing signals",
          "Mobile-first layout for on-the-go leads",
          "Fast, SEO-optimized pages",
        ],
        gradient: "linear-gradient(135deg, #155656 0%, #1A6B6B 100%)",
        url: "https://airductcleaning.services/",
      },
      {
        business: "Lint Savers Dryer Cleaning",
        location: "South Florida",
        result:
          "Dryer-vent cleaning site with click-to-call and booking",
        features: [
          "Dedicated dryer-vent service pages",
          "Before/after imagery for trust",
          "Click-to-call and WhatsApp buttons",
          "Booking and quote-request forms",
        ],
        gradient: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
        url: "https://dryercleaningservices.com/",
      },
      {
        business: "ClingPool",
        location: "Miami, FL",
        result: "Pool cleaning & maintenance site with booking flow",
        features: [
          "Service packages with clear pricing signals",
          "Online booking and quote request",
          "Service area coverage for Miami metro",
          "Before/after imagery for trust",
        ],
        gradient: "linear-gradient(135deg, #2E9E7D 0%, #1A6B6B 100%)",
        url: "https://astounding-scone-95741c.netlify.app/",
      },
      {
        business: "Locksmith Luz",
        location: "Los Angeles, CA",
        result: "24/7 locksmith site with emergency service callout",
        features: [
          "Emergency callout CTA in the header",
          "Residential, commercial, and auto service pages",
          "Click-to-call optimized for mobile",
          "Trust badges and fast-response messaging",
        ],
        gradient: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
        url: "https://magenta-boba-a630b1.netlify.app/",
      },
      {
        business: "Locksmith Luck",
        location: "Los Angeles, CA",
        result: "Locksmith site with fast-response positioning",
        features: [
          "Clean hero with single primary CTA",
          "Service breakdown with price transparency",
          "Service area pages across Greater LA",
          "Review and testimonial section",
        ],
        gradient: "linear-gradient(135deg, #155656 0%, #1A6B6B 100%)",
        url: "https://willowy-babka-a0c492.netlify.app/",
      },
    ],
  },
};

function screenshotUrl(target: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(target)}&screenshot=true&meta=false&embed=screenshot.url`;
}

const ALL_SLUGS = Object.keys(industries);

/* ─── Metadata ───────────────────────────────────────────────────── */

export async function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = industries[slug];
  if (!industry) return { title: "Not Found" };

  return {
    title: `${industry.name} Website Examples — Sweet Home Services`,
    description: `See real examples of ${industry.name.toLowerCase()} websites built by Sweet Home Services. ${industry.tagline}`,
  };
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default async function IndustryExamplesPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const industry = industries[slug];
  if (!industry) notFound();

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-16">
        {/* Hero */}
        <section className="py-20" style={{ background: "#1A6B6B" }}>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src={industry.icon}
                width={56}
                height={56}
                alt=""
                aria-hidden="true"
                className="brightness-0 invert opacity-80"
              />
            </div>
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-heading)", color: "#F5A623" }}
            >
              {industry.name} Examples
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {industry.tagline}
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}
            >
              {industry.description}
            </p>
          </div>
        </section>

        {/* Examples */}
        <section className="py-16" style={{ background: "#F9FAFB" }}>
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-10 lg:gap-12">
              {industry.examples.map((ex, idx) => (
                <div
                  key={ex.business}
                  className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                >
                  {/* Browser preview — real screenshot if url, otherwise CSS mock */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className="rounded-2xl overflow-hidden shadow-lg"
                      style={{ background: ex.gradient }}
                    >
                      <div className="p-5">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                          {/* Browser chrome */}
                          <div className="bg-black/20 px-3 py-2 flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                            <div className="ml-2 flex-1 truncate rounded-full bg-white/20 px-3 py-1 text-[11px] text-white/70">
                              {ex.url
                                ? ex.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
                                : `${ex.business.toLowerCase().replace(/[^a-z0-9]+/g, "")}.com`}
                            </div>
                          </div>

                          {ex.url ? (
                            /* Live screenshot via Microlink */
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={screenshotUrl(ex.url)}
                              alt={`Screenshot of ${ex.business} website`}
                              loading="lazy"
                              className="block w-full h-auto"
                              style={{ background: "#fff" }}
                            />
                          ) : (
                            /* CSS mock for unreleased examples */
                            <div className="p-6 space-y-3">
                              <div className="h-4 w-3/4 rounded bg-white/30" />
                              <div className="h-3 w-full rounded bg-white/20" />
                              <div className="h-3 w-5/6 rounded bg-white/20" />
                              <div className="h-3 w-2/3 rounded bg-white/15" />
                              <div className="mt-4 flex gap-2">
                                <div className="h-8 w-28 rounded-md bg-white/30" />
                                <div className="h-8 w-24 rounded-md bg-white/15" />
                              </div>
                              <div className="mt-3 grid grid-cols-3 gap-2">
                                <div className="h-16 rounded bg-white/10" />
                                <div className="h-16 rounded bg-white/10" />
                                <div className="h-16 rounded bg-white/10" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {ex.url && (
                      <div className="mt-3 text-center lg:text-left">
                        <a
                          href={ex.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:underline"
                          style={{
                            fontFamily: "var(--font-heading)",
                            color: "#1A6B6B",
                          }}
                        >
                          Visit live site
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 12 12"
                            fill="none"
                            aria-hidden="true"
                          >
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
                    )}
                  </div>

                  {/* Info */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="inline-block rounded-full px-2.5 py-0.5 text-xs font-bold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          background: "#1A6B6B15",
                          color: "#1A6B6B",
                        }}
                      >
                        {industry.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: "#9CA3AF",
                        }}
                      >
                        {ex.location}
                      </span>
                    </div>

                    <h2
                      className="text-2xl font-bold mb-3"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#1F2937",
                      }}
                    >
                      {ex.business}
                    </h2>

                    {/* Result badge */}
                    <div
                      className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mb-5"
                      style={{ background: "#F5A62315" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="#F5A623"
                        aria-hidden="true"
                      >
                        <path d="M8 0l2.47 4.94L16 5.83l-4 3.86.94 5.47L8 12.5l-4.94 2.66.94-5.47-4-3.86 5.53-.89L8 0z" />
                      </svg>
                      <span
                        className="text-sm font-semibold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "#1F2937",
                        }}
                      >
                        {ex.result}
                      </span>
                    </div>

                    {/* Features */}
                    <h3
                      className="text-xs font-bold uppercase tracking-wider mb-3"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "#9CA3AF",
                      }}
                    >
                      What We Built
                    </h3>
                    <ul className="space-y-2">
                      {ex.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            className="mt-0.5 shrink-0"
                          >
                            <circle cx="9" cy="9" r="9" fill="#1A6B6B15" />
                            <path
                              d="M5.5 9l2.5 2.5 4.5-5"
                              stroke="#1A6B6B"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span
                            className="text-sm text-neutral-700"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other industries */}
        <section className="py-12 border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              className="text-lg font-bold mb-6 text-center"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#1F2937",
              }}
            >
              Explore Other Industries
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {ALL_SLUGS.filter((s) => s !== slug).map((s) => (
                <Link
                  key={s}
                  href={`/examples/${s}`}
                  className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium transition-colors hover:border-brand-teal-300 hover:bg-brand-teal-50"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#1A6B6B",
                  }}
                >
                  {industries[s].name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center" style={{ background: "#1A6B6B" }}>
          <div className="mx-auto max-w-2xl px-4">
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ready to Grow Your {industry.name} Business?
            </h2>
            <p
              className="text-lg mb-8"
              style={{ fontFamily: "var(--font-sans)", color: "#B2DFDB" }}
            >
              Get a website built specifically for your industry — optimized for
              local search and designed to convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="inline-block rounded-xl px-8 py-4 font-semibold text-base transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "#F5A623",
                  color: "#111827",
                }}
              >
                View Plans
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-xl px-8 py-4 font-semibold text-base transition-colors duration-150"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "transparent",
                  color: "#FFFFFF",
                  border: "2px solid rgba(255,255,255,0.3)",
                }}
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
