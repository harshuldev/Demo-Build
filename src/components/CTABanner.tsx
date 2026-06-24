/**
 * CTABanner.tsx
 *
 * Full-width conversion banner with gradient background.
 * High-contrast design to drive quote requests.
 *
 * To customise: update headline, sub-copy, and button labels.
 */

export default function CTABanner() {
  return (
    <section className="cta-banner" id="cta" aria-label="Call to action">
      <div className="container">
        <div className="cta-banner__inner">

          {/* Eyebrow */}
          <span className="cta-banner__eyebrow">
            Ready to get started?
          </span>

          {/* Headline */}
          <h2 className="cta-banner__headline">
            Request Your Free Quote Today
          </h2>

          {/* Supporting copy */}
          <p className="cta-banner__sub">
            Lorem ipsum dolor sit amet consectetur. Replace this placeholder with
            a compelling reason to act now - e.g. limited availability, a free
            survey, or a satisfaction guarantee.
          </p>

          {/* Action buttons */}
          <div className="cta-banner__actions">
            <a href="/#contact" className="cta-banner__btn-primary">
              Get a Free Quote
              <span aria-hidden="true"> →</span>
            </a>
            <a href="tel:00000000000" className="cta-banner__btn-secondary">
              📞 Call Us Now
            </a>
          </div>

          {/* Trust reassurances */}
          <div className="cta-banner__trust">
            <span className="cta-banner__trust-item">
              <span aria-hidden="true">✓</span> No obligation
            </span>
            <span className="cta-banner__trust-item">
              <span aria-hidden="true">✓</span> Fast response
            </span>
            <span className="cta-banner__trust-item">
              <span aria-hidden="true">✓</span> Fully insured
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
