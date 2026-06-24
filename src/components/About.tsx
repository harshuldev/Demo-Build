/**
 * About.tsx
 *
 * Two-column about section with:
 *  - Company story text
 *  - Image placeholder
 *  - Three experience statistics
 *
 * To customise: replace all placeholder content with real copy,
 * update STATS with real figures, and swap the image placeholder
 * for a real <Image /> component.
 */

import ImagePlaceholder from "./ImagePlaceholder";

const STATS = [
  { value: "10+", label: "Years in Business" },
  { value: "500+", label: "Projects Completed" },
  { value: "99%", label: "Customer Satisfaction" },
];

export default function About() {
  return (
    <section
      className="section section--alt"
      id="about"
      aria-label="About us"
    >
      <div className="container">
        <div className="about__inner">

          {/* ── Image placeholder ── */}
          <ImagePlaceholder
            className="about__img-placeholder"
            label="Team / Business Image"
          />

          {/* ── Text content ── */}
          <div className="about__text">
            <span className="section-eyebrow">Our Story</span>
            <h2 className="section-title">About Business Name</h2>
            <div className="divider divider--left" />
            <p className="about__body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Placeholder text — replace with your real business story.
            </p>
            <p className="about__body">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Continue describing what
              makes your business unique and trustworthy.
            </p>

            {/* CTA */}
            <a href="/#contact" className="btn-primary" style={{ marginTop: "0.5rem" }}>
              Work With Us
            </a>

            {/* Statistics */}
            <div className="about__stats" aria-label="Key statistics">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
