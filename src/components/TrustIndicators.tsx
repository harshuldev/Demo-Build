/**
 * TrustIndicators.tsx
 *
 * Dark full-width strip with four trust-building cards.
 * Displayed immediately below the hero for maximum impact.
 *
 * To customise: edit TRUST_ITEMS with real business USPs.
 */

const TRUST_ITEMS = [
  {
    icon: "🔒",
    title: "Trust Point One",
    desc: "Short description of your first key trust factor goes here.",
  },
  {
    icon: "⭐",
    title: "Trust Point Two",
    desc: "Short description of your second key trust factor goes here.",
  },
  {
    icon: "🏆",
    title: "Trust Point Three",
    desc: "Short description of your third key trust factor goes here.",
  },
  {
    icon: "💬",
    title: "Trust Point Four",
    desc: "Short description of your fourth key trust factor goes here.",
  },
];

export default function TrustIndicators() {
  return (
    <section className="trust" aria-label="Trust indicators">
      <div className="container">
        <div className="trust__grid">
          {TRUST_ITEMS.map((item) => (
            <div className="trust__card" key={item.title}>
              <div className="trust__card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div>
                <h3 className="trust__card-title">{item.title}</h3>
                <p className="trust__card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
