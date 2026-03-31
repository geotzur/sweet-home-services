"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            {/* Icon: house + wifi arcs */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              {/* House body */}
              <path
                d="M6 15L16 6L26 15V27H20V20H12V27H6V15Z"
                fill="#1A6B6B"
              />
              {/* Roof ridge */}
              <path d="M16 6L26 15" stroke="#1A6B6B" strokeWidth="0" />
              {/* WiFi dot */}
              <circle cx="16" cy="8" r="1.5" fill="#F5A623" />
              {/* WiFi arc 1 */}
              <path
                d="M12.5 5.5C13.8 4.2 15.9 4.2 17.5 5.5"
                stroke="#F5A623"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* WiFi arc 2 */}
              <path
                d="M10.5 3.5C12.8 1.3 19.2 1.3 21.5 3.5"
                stroke="#F5A623"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span className="text-neutral-900 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="font-700 text-base block">Sweet Home</span>
              <span className="font-400 text-[10px] tracking-widest uppercase text-brand-teal-600 block -mt-0.5">
                Services
              </span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 rounded-full border border-brand-teal-100 bg-white/75 px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-brand-teal-600 transition-colors duration-150"
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
              className="text-sm font-semibold text-brand-teal-600 hover:text-brand-teal-700 transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              See Plans
            </a>
            <a
              href="#pricing"
              className="rounded-lg bg-brand-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-teal-600 transition-colors duration-150 shadow-brand"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-neutral-600 hover:bg-neutral-100 transition-colors"
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
                className="block py-2.5 text-sm font-medium text-neutral-700 hover:text-brand-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-neutral-100">
              <a
                href="#pricing"
                className="block w-full rounded-lg bg-brand-teal-500 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-brand-teal-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
