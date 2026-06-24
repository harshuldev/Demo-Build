/**
 * Hero.tsx
 *
 * Full-width hero section – the first thing visitors see.
 * Contains:
 *  - Badge / eyebrow text
 *  - Large headline with accent word
 *  - Supporting paragraph
 *  - Two CTA buttons
 *  - Large image placeholder
 *  - Floating stat cards
 *  - Social proof / trust line
 *
 * Replace all placeholder text and image placeholders with
 * real content when deploying for a specific business.
 */

import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="container">
        <div className="hero__inner">

          {/* ── Left: Text content ── */}
          <div className="hero__content">

            {/* Eyebrow badge */}
            <div className="hero__badge">
              <span className="badge">⭐ Trusted by 500+ Customers</span>
            </div>

            {/* Main headline - replace with real business tagline */}
            <h1 className="hero__headline">
              Your Professional{" "}
              <span>Local Service</span>
              {" "}Experts
            </h1>

            {/* Supporting paragraph - replace with real copy */}
            <p className="hero__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. We
              deliver high-quality, professional services to homes and businesses
              across the local area. Placeholder text - replace with your real
              business description.
            </p>

            {/* CTA buttons */}
            <div className="hero__actions">
              <a href="/#contact" className="btn-primary">
                Request a Free Quote
                <span aria-hidden="true">→</span>
              </a>
              <a href="/#services" className="btn-secondary">
                Our Services
              </a>
            </div>

            {/* Trust line with stars */}
            <div className="hero__trust-line">
              <div className="hero__trust-stars" aria-label="5 star rating">
                {"★".repeat(5)}
              </div>
              <span>
                <strong>4.9/5</strong> from 200+ verified reviews
              </span>
            </div>
          </div>

          {/* ── Right: Image ── */}
          <div className="hero__image">
            <div className="hero__image-wrapper">

              {/* Main hero image placeholder */}
              <ImagePlaceholder
                className="hero__img-placeholder"
                label="Hero Image"
                aspectRatio="auto"
              />

              {/* Floating stat card – top left */}
              <div className="hero__stat-card hero__stat-card--tl">
                <div className="hero__stat-icon" aria-hidden="true">🏆</div>
                <div>
                  <div className="hero__stat-value">10+ Years</div>
                  <div className="hero__stat-label">Experience</div>
                </div>
              </div>

              {/* Floating stat card – bottom right */}
              <div className="hero__stat-card hero__stat-card--br">
                <div className="hero__stat-icon" aria-hidden="true">✅</div>
                <div>
                  <div className="hero__stat-value">500+ Jobs</div>
                  <div className="hero__stat-label">Completed</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
