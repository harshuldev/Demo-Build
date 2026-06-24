"use client";

/**
 * Contact.tsx
 *
 * Contact section with:
 *  - Info panel (address, phone, email, hours)
 *  - Contact form (name, phone, email, message)
 *  - Success message after submission
 *
 * NOTE: This form is for demo/design purposes only.
 * No backend or email sending is configured.
 * To make it functional, connect to:
 *  - EmailJS / Resend / Nodemailer
 *  - A Next.js API route at /api/contact
 *  - A third-party form service (Formspree, Netlify Forms etc.)
 */

import { useState } from "react";

const CONTACT_DETAILS = [
  { icon: "📍", label: "Address", value: "123 Placeholder Street, Your Town, XX1 1XX" },
  { icon: "📞", label: "Phone", value: "00000 000 000" },
  { icon: "📧", label: "Email", value: "hello@businessname.co.uk" },
  { icon: "🕐", label: "Hours", value: "Mon–Fri: 8am–6pm | Sat: 9am–4pm" },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* Demo-only handler - replace with real API call */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay for demo
    await new Promise((r) => setTimeout(r, 1000));

    // TODO: Replace with real form submission logic
    // e.g. await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact" aria-label="Contact us">
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ready to get started or just have a question? Fill in the form below
            and we&apos;ll get back to you as quickly as possible.
          </p>
        </div>

        <div className="contact__inner">

          {/* ── Info panel ── */}
          <aside aria-label="Contact information">
            <h3 className="contact__info-title">Let&apos;s Talk</h3>
            <p className="contact__info-body">
              Lorem ipsum dolor sit amet consectetur. We&apos;re a local business
              and pride ourselves on being easy to reach. Replace this with a
              genuine, friendly message about how you prefer to be contacted.
            </p>

            <ul className="contact__detail-list" aria-label="Contact details">
              {CONTACT_DETAILS.map((detail) => (
                <li className="contact__detail-item" key={detail.label}>
                  <div
                    className="contact__detail-icon"
                    aria-hidden="true"
                  >
                    {detail.icon}
                  </div>
                  <div>
                    <div className="contact__detail-label">{detail.label}</div>
                    <div className="contact__detail-value">{detail.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* ── Form panel ── */}
          <div className="contact__form-card">
            {!submitted ? (
              <>
                <h3 className="contact__form-title">Request a Free Quote</h3>

                <form
                  className="contact__form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  {/* Name + Phone row */}
                  <div className="contact__form-row">
                    <div className="contact__form-group">
                      <label className="form-label" htmlFor="name">
                        Your Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                      />
                    </div>

                    <div className="contact__form-group">
                      <label className="form-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="07700 900000"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="contact__form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>

                  {/* Message */}
                  <div className="contact__form-group">
                    <label className="form-label" htmlFor="message">
                      How Can We Help? <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      className="form-input"
                      id="message"
                      name="message"
                      placeholder="Please describe what you need and we'll get back to you with a quote..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary contact__form-submit"
                    disabled={loading}
                    aria-busy={loading}
                  >
                    {loading ? "Sending…" : "Send Message →"}
                  </button>

                  {/* Privacy note */}
                  <p className="contact__form-note">
                    🔒 Your details are safe with us. No spam, ever.
                  </p>
                </form>
              </>
            ) : (
              /* Success message */
              <div className="contact__success is-visible" role="status">
                <div className="contact__success-icon" aria-hidden="true">
                  ✅
                </div>
                <h3 className="contact__success-title">
                  Message Received!
                </h3>
                <p className="contact__success-body">
                  Thanks for getting in touch. We&apos;ll be in contact with you
                  shortly. Replace this with your real response time promise.
                </p>
                <button
                  className="btn-secondary"
                  style={{ marginTop: "1rem" }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm(INITIAL_FORM);
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
