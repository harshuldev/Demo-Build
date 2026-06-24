/**
 * WhyChooseUs.tsx
 *
 * Four-card grid highlighting the business's key benefits / value propositions.
 *
 * To customise: edit WHY_ITEMS with your real USPs.
 */

const WHY_ITEMS = [
  {
    icon: "🥇",
    title: "Benefit One",
    desc: "Describe your first key benefit here. Why should a customer choose you over a competitor? Be specific and compelling.",
  },
  {
    icon: "⏱️",
    title: "Benefit Two",
    desc: "Describe your second key benefit here. What do you offer that others don't? Think reliability, speed, or value.",
  },
  {
    icon: "💷",
    title: "Benefit Three",
    desc: "Describe your third key benefit here. Consider pricing transparency, no-obligation quotes, or warranties.",
  },
  {
    icon: "🤝",
    title: "Benefit Four",
    desc: "Describe your fourth key benefit here. Customer care, local knowledge, and community ties are strong trust signals.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section section--alt"
      id="why-us"
      aria-label="Why choose us"
    >
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">Why Us</span>
          <h2 className="section-title">Why Choose Business Name?</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Placeholder text - replace with a brief, benefit-led paragraph
            explaining what sets your business apart from the competition.
          </p>
        </div>

        {/* Cards */}
        <div className="why__grid">
          {WHY_ITEMS.map((item, index) => (
            <div
              className={`why-card animate-on-scroll delay-${index + 1}`}
              key={item.title}
            >
              <div className="why-card__icon">
                <div className="icon-badge icon-badge--lg" aria-hidden="true">
                  {item.icon}
                </div>
              </div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
