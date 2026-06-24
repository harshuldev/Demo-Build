/**
 * BeforeAfter.tsx
 *
 * Before & after showcase section.
 * Dark background with two large image placeholders side-by-side.
 * Labels overlay each panel to indicate before / after.
 *
 * To customise: swap image placeholders for real images of your work.
 */

import ImagePlaceholder from "./ImagePlaceholder";

export default function BeforeAfter() {
  return (
    <section
      className="section before-after"
      id="before-after"
      aria-label="Before and after showcase"
    >
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>
            The Difference We Make
          </span>
          <h2 className="section-title">Before &amp; After</h2>
          <div className="divider" />
          <p className="section-subtitle">
            See the transformation our work delivers. Replace these placeholders
            with real before and after photos from your own projects.
          </p>
        </div>

        {/* Pair of panels */}
        <div className="before-after__pair">

          {/* Before panel */}
          <div className="before-after__panel">
            <ImagePlaceholder
              className="before-after__img-placeholder"
              label="BEFORE — Original State"
            />
            <span className="before-after__label">Before</span>
          </div>

          {/* Arrow divider (visible on tablet and up) */}
          <div className="before-after__arrow" aria-hidden="true">
            →
          </div>

          {/* After panel */}
          <div className="before-after__panel">
            <ImagePlaceholder
              className="before-after__img-placeholder"
              label="AFTER — Completed Work"
            />
            <span className="before-after__label before-after__label--after">
              After
            </span>
          </div>

        </div>

        {/* Caption */}
        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          Replace these placeholders with real photos of your best work.
        </p>

      </div>
    </section>
  );
}
