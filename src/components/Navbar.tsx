"use client";

/**
 * Navbar.tsx
 *
 * Sticky top navigation bar.
 * Features:
 *  - Logo placeholder
 *  - Desktop nav links
 *  - Mobile hamburger menu with slide-down overlay
 *  - Scroll-triggered shadow / border
 *  - CTA button (links to #contact)
 *
 * To customise:
 *  - Replace NAV_LINKS with your real page sections
 *  - Update BUSINESS_NAME and BUSINESS_INITIAL
 *  - Adjust BUSINESS_TAGLINE
 */

import { useState, useEffect, useCallback } from "react";

/* ── Config – edit these values ── */
const BUSINESS_INITIAL = "B";
const BUSINESS_NAME = "Business Name";
const BUSINESS_TAGLINE = "Electrician Services";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Add shadow once user scrolls past 10px */
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Close mobile menu on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Prevent body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar${isScrolled ? " is-scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner">
        {/* ── Logo ── */}
        <a href="/#home" className="navbar__logo" aria-label="Go to homepage">
          <div className="navbar__logo-mark" aria-hidden="true">
            {BUSINESS_INITIAL}
          </div>
          <div>
            <span className="navbar__logo-text">{BUSINESS_NAME}</span>
            <span className="navbar__logo-sub">{BUSINESS_TAGLINE}</span>
          </div>
        </a>

        {/* ── Desktop nav ── */}
        <nav aria-label="Main navigation">
          <ul className="navbar__nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Desktop CTA ── */}
        <a href="/#contact" className="btn-primary navbar__cta">
          Get a Free Quote
        </a>

        {/* ── Hamburger (mobile) ── */}
        <button
          className={`navbar__hamburger${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        id="mobile-menu"
        className={`navbar__mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-nav">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="/#contact"
          className="btn-primary navbar__mobile-cta"
          onClick={closeMobileMenu}
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
