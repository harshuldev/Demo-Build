/**
 * Footer.tsx
 *
 * Site footer with:
 *  - Brand / logo + tagline + social icons
 *  - Quick links column
 *  - Services links column
 *  - Contact details column
 *  - Copyright bar with legal links
 *
 * To customise: update BUSINESS_* constants, NAV_LINKS,
 * SERVICE_LINKS, SOCIAL_LINKS, and CONTACT_DETAILS.
 */

const BUSINESS_INITIAL = "B";
const BUSINESS_NAME = "Business Name";
const BUSINESS_TAGLINE =
  "Professional local trades services you can trust. Replace this with your real tagline.";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/#contact" },
];

const SERVICE_LINKS = [
  { label: "Service One", href: "/#services" },
  { label: "Service Two", href: "/#services" },
  { label: "Service Three", href: "/#services" },
  { label: "Service Four", href: "/#services" },
  { label: "Service Five", href: "/#services" },
  { label: "Service Six", href: "/#services" },
];
/*
const SOCIAL_LINKS = [
  { icon: "f", label: "Facebook", href: "#" },
  { icon: "in", label: "Instagram", href: "#" },
  { icon: "X", label: "X / Twitter", href: "#" },
  { icon: "▶", label: "YouTube", href: "#" },
];
*/
const CONTACT_DETAILS = [
  { icon: "📍", text: "123 Placeholder Street, Your Town, XX1 1XX" },
  { icon: "📞", text: "00000 000 000" },
  { icon: "📧", text: "hello@businessname.co.uk" },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container">

        {/* ── Main columns ── */}
        <div className="footer__main">

          {/* Brand column */}
          <div className="footer__brand">
            <a href="/#home" className="footer__logo" aria-label="Go to top">
              <div className="footer__logo-mark" aria-hidden="true">
                {BUSINESS_INITIAL}
              </div>
              <span className="footer__logo-text">{BUSINESS_NAME}</span>
            </a>
            <p className="footer__tagline">{BUSINESS_TAGLINE}</p>

            {/* Social icons 
            <nav aria-label="Social media links">
              <div className="footer__social">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer__social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </nav>
            */}
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="footer__col-title">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="footer__nav-list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer__nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services column */}
          <div>
            <h3 className="footer__col-title">Our Services</h3>
            <nav aria-label="Services navigation">
              <ul className="footer__nav-list">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer__nav-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="footer__col-title">Contact</h3>
            <ul className="footer__contact-list">
              {CONTACT_DETAILS.map((detail) => (
                <li className="footer__contact-item" key={detail.text}>
                  <span className="footer__contact-icon" aria-hidden="true">
                    {detail.icon}
                  </span>
                  <span>{detail.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {CURRENT_YEAR} {BUSINESS_NAME}. All rights reserved.
          </p>
          <nav
            className="footer__legal"
            aria-label="Legal links"
          >
            <a href="/privacy-policy" className="footer__legal-link">
              Privacy Policy
            </a>
          </nav>
        </div>

      </div>
    </footer>
  );
}
