/**
 * layout.tsx  –  Root Next.js layout
 *
 * This file:
 *  - Imports all CSS files (globals first, then components)
 *  - Sets page-level metadata
 *  - Wraps all pages with the persistent Navbar and Footer
 */

import type { Metadata } from "next";

/* ── CSS imports (order matters for cascade) ── */
import "@/styles/globals.css";
import "@/styles/components.css";
import "@/styles/navbar.css";
import "@/styles/hero.css";
import "@/styles/sections.css";
import "@/styles/gallery-reviews.css";
import "@/styles/contact-footer.css";

/* ── Persistent layout components ── */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------------------------------------------------------------
   PAGE METADATA
   Replace these values with real business details.
   --------------------------------------------------------------- */
export const metadata: Metadata = {
  title: "Business Name | Professional Local Services",
  description:
    "Your go-to local trade business. Professional, reliable and affordable services in your area. Request a free quote today.",
  keywords: ["local trades", "professional services", "business name"],
  openGraph: {
    title: "Business Name | Professional Local Services",
    description: "Professional, reliable local services. Get a free quote today.",
    type: "website",
  },
};

/* ---------------------------------------------------------------
   ROOT LAYOUT
   --------------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ── Sticky navigation bar ── */}
        <Navbar />

        {/* ── Spacer so fixed navbar doesn't overlap content ── */}
        <div className="navbar-spacer" />

        {/* ── Page content ── */}
        <main>{children}</main>

        {/* ── Site footer ── */}
        <Footer />
      </body>
    </html>
  );
}
