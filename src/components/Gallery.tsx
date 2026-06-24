/**
 * Gallery.tsx
 *
 * Responsive image gallery with 6 image placeholders.
 * Hover overlay effect on each image.
 * First item spans two columns on tablet and above.
 *
 * To customise: replace ImagePlaceholder components with real
 * <Image /> components using Next.js optimised images.
 */

import ImagePlaceholder from "./ImagePlaceholder";

const GALLERY_ITEMS = [
  { label: "Gallery Image 1 (Featured)" },
  { label: "Gallery Image 2" },
  { label: "Gallery Image 3" },
  { label: "Gallery Image 4" },
  { label: "Gallery Image 5" },
  { label: "Gallery Image 6" },
];

export default function Gallery() {
  return (
    <section
      className="section section--alt"
      id="gallery"
      aria-label="Photo gallery"
    >
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-title">Recent Projects</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Browse a selection of our recent completed projects. Replace these
            image placeholders with real photos of your best work.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item, index) => (
            <div className="gallery__item" key={index} tabIndex={0}>
              {/* Image placeholder - replace with <Image /> */}
              <ImagePlaceholder
                className="gallery__img-placeholder"
                label={item.label}
              />

              {/* Hover overlay */}
              <div className="gallery__overlay" aria-hidden="true">
                <span className="gallery__overlay-label">
                  <span>🔍</span>
                  View Project
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA below gallery */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <a href="/#contact" className="btn-secondary">
            View All Projects →
          </a>
        </div>

      </div>
    </section>
  );
}
