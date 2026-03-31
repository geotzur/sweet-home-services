import Image from "next/image";

const logos = [
  { name: "Google", src: "/assets/logo-google-transparent.png" },
  { name: "Semrush", src: "/assets/logo-semrush-transparent.png" },
  { name: "Stripe", src: "/assets/logo-stripe-transparent.png" },
  { name: "Vercel", src: "/assets/logo-vercel-transparent.png" },
  { name: "Cloudflare", src: "/assets/logo-cloudflare-transparent.png" },
];

export default function PartnerLogosSection() {
  return (
    <section className="py-10 sm:py-14" aria-label="Trusted technology partners">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          className="text-center mb-8 text-sm font-medium uppercase tracking-widest"
          style={{ fontFamily: "var(--font-heading)", color: "#9CA3AF" }}
        >
          Powered by industry leaders
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 sm:gap-y-8 md:gap-x-20">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-[120px] h-[40px] sm:w-[156px] sm:h-[52px]"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain"
                sizes="(max-width: 640px) 120px, 156px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
