const footerNav = {
  services: {
    title: "Services",
    links: [
      { label: "Starter Plan", href: "#pricing" },
      { label: "Growth Plan", href: "#pricing" },
      { label: "Authority Plan", href: "#pricing" },
      { label: "SEO Services", href: "#how-it-works" },
    ],
  },
  industries: {
    title: "Industries",
    links: [
      { label: "Contractors", href: "#industries/contractors" },
      { label: "Salons & Spas", href: "#industries/salons" },
      { label: "Medical & Dental", href: "#industries/medical" },
      { label: "Restaurants", href: "#industries/restaurants" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ background: "#111827" }}
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 15L16 6L26 15V27H20V20H12V27H6V15Z"
                  fill="#1A6B6B"
                />
                <circle cx="16" cy="8" r="1.5" fill="#F5A623" />
                <path
                  d="M12.5 5.5C13.8 4.2 15.9 4.2 17.5 5.5"
                  stroke="#F5A623"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M10.5 3.5C12.8 1.3 19.2 1.3 21.5 3.5"
                  stroke="#F5A623"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span
                className="text-white leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="font-bold text-sm block">Sweet Home</span>
                <span
                  className="font-normal text-[10px] tracking-widest uppercase block -mt-0.5"
                  style={{ color: "#97CDCD" }}
                >
                  Services
                </span>
              </span>
            </div>

            <p
              className="mb-5 leading-relaxed"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "#6B7280",
              }}
            >
              Websites + SEO for local businesses.
              <br />
              Your town. Found online.
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: "#1F2937", color: "#9CA3AF" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.values(footerNav).map((col) => (
            <div key={col.title}>
              <p
                className="mb-4 section-overline"
                style={{ color: "#9CA3AF" }}
              >
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-white"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        color: "#6B7280",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="py-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "#1F2937" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              color: "#4B5563",
            }}
          >
            © {currentYear} Sweet Home Services. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors hover:text-neutral-400"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "#4B5563",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
