"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const GLOSSGENIUS_URL = "https://radiantlybare.glossgenius.com/services";

const navLinks = [
  { label: "Portfolio", href: "/portfolio", external: false },
  { label: "Services", href: GLOSSGENIUS_URL, external: true },
  { label: "About", href: "/about", external: false },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="mx-auto max-w-5xl px-6 flex items-center justify-between" style={{ height: "104px" }}>
        {/* Logo */}
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo.PNG"
            alt="Radiantlybare"
            width={400}
            height={200}
            loading="eager"
            style={{ height: "auto", width: "115px" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base transition-colors hover:text-[#a27946]"
                style={{ fontFamily: "var(--font-playfair)", color: "#363c1f" }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-base transition-colors hover:text-[#a27946]"
                style={{ fontFamily: "var(--font-playfair)", color: "#363c1f" }}
              >
                {label}
              </Link>
            )
          )}
          <a
            href={GLOSSGENIUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.9rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ffffff",
              backgroundColor: "#415e07",
              padding: "0.65rem 1.5rem",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "8px",
            }}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2"
          style={{ color: "#363c1f" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Header divider */}
      <div className="mx-6 border-t" style={{ borderColor: "#363c1f" }} />

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav
          className="sm:hidden bg-white px-6 py-5 flex flex-col gap-5 border-b"
          style={{ borderColor: "#363c1f" }}
        >
          {navLinks.map(({ label, href, external }) =>
            external ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm"
                style={{ fontFamily: "var(--font-playfair)", color: "#363c1f" }}
              >
                {label}
              </a>
            ) : (
              <Link
                key={label}
                href={href}
                className="text-sm"
                style={{ fontFamily: "var(--font-playfair)", color: "#363c1f" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            )
          )}
          <a
            href={GLOSSGENIUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.9rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ffffff",
              backgroundColor: "#415e07",
              padding: "0.65rem 1.5rem",
              textDecoration: "none",
              display: "inline-block",
              alignSelf: "flex-start",
              borderRadius: "8px",
            }}
          >
            Book Now
          </a>
        </nav>
      )}
    </header>
  );
}
