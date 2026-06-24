"use client";

/**
 * FAQ.tsx
 *
 * Accordion-style FAQ section with six placeholder questions.
 * Clicking a question toggles the answer open/closed.
 * Only one item open at a time.
 *
 * To customise: replace FAQ_ITEMS with your real Q&A pairs.
 */

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Placeholder question one — What services do you offer?",
    answer:
      "Replace this with a real answer. Describe your full range of services clearly, using keywords that your customers might search for. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt.",
  },
  {
    question: "Placeholder question two — What areas do you cover?",
    answer:
      "Replace with the real service area. List the towns, cities, or postcodes you serve. Covering a specific geographic area helps with local SEO and sets clear expectations for potential customers.",
  },
  {
    question: "Placeholder question three — How do I get a quote?",
    answer:
      "Replace with your real quoting process. E.g. 'Fill in the contact form below, call us directly, or email us. We aim to respond within 24 hours with a detailed, no-obligation quote.'",
  },
  {
    question: "Placeholder question four — Are you fully insured?",
    answer:
      "Replace with details of your insurance and qualifications. Customers need reassurance that you are insured, qualified, and that their property is protected during and after the work.",
  },
  {
    question: "Placeholder question five — How long does work typically take?",
    answer:
      "Replace with honest timeframe estimates for your most common jobs. Being transparent about timescales builds trust and reduces anxiety for customers who are planning around the work.",
  },
  {
    question: "Placeholder question six — Do you offer a guarantee?",
    answer:
      "Replace with details of any warranty or guarantee you offer. A workmanship guarantee is a powerful selling point and gives customers peace of mind when choosing between providers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="section section--alt" id="faq" aria-label="FAQ">
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Answers to the most common questions about our services. Can&apos;t
            find what you&apos;re looking for? Contact us directly and we&apos;ll be
            happy to help.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq__list" role="list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`faq-item${isOpen ? " is-open" : ""}`}
                key={index}
                role="listitem"
              >
                <button
                  className="faq-item__trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="faq-item__question">{item.question}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div
                  className="faq-item__answer"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  hidden={!isOpen}
                >
                  <p className="faq-item__answer-text">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
