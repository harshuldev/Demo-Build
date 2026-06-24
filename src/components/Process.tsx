/**
 * Process.tsx
 *
 * Four-step process / how-it-works section.
 * Uses a timeline-style layout with connecting line on desktop.
 *
 * To customise: edit STEPS with your real process.
 */

const STEPS = [
  {
    number: "01",
    title: "Step One",
    desc: "Describe the first step in your customer journey here. E.g. 'Get in touch via our contact form or phone.'",
  },
  {
    number: "02",
    title: "Step Two",
    desc: "Describe the second step here. E.g. 'We'll assess your needs and provide a free, no-obligation quote.'",
  },
  {
    number: "03",
    title: "Step Three",
    desc: "Describe the third step here. E.g. 'Our team will complete the work to a high standard, on time.'",
  },
  {
    number: "04",
    title: "Step Four",
    desc: "Describe the final step here. E.g. 'We follow up to make sure you're 100% satisfied with the result.'",
  },
];

export default function Process() {
  return (
    <section className="section" id="process" aria-label="How it works">
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">Our Simple Process</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Getting started is easy. Here&apos;s what to expect when you choose
            Business Name - replace this with your real process description.
          </p>
        </div>

        {/* Steps */}
        <div className="process__steps" aria-label="Process steps">
          {STEPS.map((step) => (
            <div className="process-step" key={step.number}>
              <div
                className="process-step__number"
                aria-label={`Step ${step.number}`}
              >
                {step.number}
              </div>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
