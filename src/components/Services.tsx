/**
 * Services.tsx
 *
 * Grid of six service cards.
 * Each card: icon, title, description, and a learn-more arrow link.
 *
 * To customise: edit SERVICES with real service names and descriptions.
 */

const SERVICES = [
  {
    icon: "🔧",
    title: "Service One",
    desc: "Lorem ipsum dolor sit amet consectetur. Professional placeholder service description goes here. Replace with your real offering.",
    href: "/#contact",
  },
  {
    icon: "⚡",
    title: "Service Two",
    desc: "Lorem ipsum dolor sit amet consectetur. Professional placeholder service description goes here. Replace with your real offering.",
    href: "/#contact",
  },
  {
    icon: "🏠",
    title: "Service Three",
    desc: "Lorem ipsum dolor sit amet consectetur. Professional placeholder service description goes here. Replace with your real offering.",
    href: "/#contact",
  },
  {
    icon: "🔩",
    title: "Service Four",
    desc: "Lorem ipsum dolor sit amet consectetur. Professional placeholder service description goes here. Replace with your real offering.",
    href: "/#contact",
  },
  {
    icon: "🛠️",
    title: "Service Five",
    desc: "Lorem ipsum dolor sit amet consectetur. Professional placeholder service description goes here. Replace with your real offering.",
    href: "/#contact",
  },
  {
    icon: "📋",
    title: "Service Six",
    desc: "Lorem ipsum dolor sit amet consectetur. Professional placeholder service description goes here. Replace with your real offering.",
    href: "/#contact",
  },
];

export default function Services() {
  return (
    <section className="section" id="services" aria-label="Our services">
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Services</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur. We offer a comprehensive
            range of professional services to meet all your needs. Replace this
            placeholder text with your real service overview.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <article
              className={`service-card animate-on-scroll delay-${(index % 3) + 1}`}
              key={service.title}
            >
              {/* Icon */}
              <div className="service-card__icon">
                <div className="icon-badge icon-badge--lg" aria-hidden="true">
                  {service.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="service-card__title">{service.title}</h3>

              {/* Description */}
              <p className="service-card__desc">{service.desc}</p>

              {/* Arrow link */}
              <a href={service.href} className="service-card__link">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
