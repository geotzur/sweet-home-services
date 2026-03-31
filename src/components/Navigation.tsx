"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#industries", label: "Industries" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-teal-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={isScrolled ? "/assets/logo-header.png" : "/assets/logo-header-white.png"}
              alt="Sweet Home Services"
              width={200}
              height={56}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav
            className={`hidden md:flex items-center gap-5 rounded-full px-4 py-2 transition-all duration-200 ${
              isScrolled
                ? "border border-brand-teal-100 bg-white/75"
                : "border border-white/15 bg-white/8 backdrop-blur-sm"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 ${
                  isScrolled
                    ? "text-neutral-700 hover:text-brand-teal-600"
                    : "text-white/80 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className={`text-sm font-semibold transition-colors ${
                isScrolled ? "text-brand-teal-600 hover:text-brand-teal-700" : "text-white/80 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              See Plans
            </a>
            <a
              href="#pricing"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors duration-150"
              style={{
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)",
                boxShadow: "0 2px 8px rgb(245 166 35 / 0.3)",
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`md:hidden rounded-md p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors ${
              isScrolled
                ? "text-neutral-600 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white shadow-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-base font-medium text-neutral-700 hover:text-brand-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <a
                href="#pricing"
                className="block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #F5A623 0%, #D4881A 100%)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
