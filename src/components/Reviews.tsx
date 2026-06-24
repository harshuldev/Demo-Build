"use client";

/**
 * Reviews.tsx
 *
 * Horizontally scrolling Google review carousel.
 * Each card: avatar, name, date, star rating, review text, verified badge.
 * Scroll arrows for accessibility.
 *
 * To customise:
 *  - Replace REVIEWS array with real Google reviews
 *  - Update OVERALL_RATING and TOTAL_REVIEWS
 *  - The avatar uses the first letter of the reviewer's name
 */

import { useRef } from "react";

/* ── Overall rating config ── */
const OVERALL_RATING = "4.9";
const TOTAL_REVIEWS = "127";

/* ── Review data - replace with real reviews ── */
const REVIEWS = [
  {
    name: "Customer Name",
    initial: "C",
    date: "2 weeks ago",
    rating: 5,
    text: "Placeholder review text goes here. This is where a real Google review will appear once you paste in genuine customer feedback. The service was excellent and the team were very professional.",
  },
  {
    name: "Reviewer Name",
    initial: "R",
    date: "1 month ago",
    rating: 5,
    text: "Replace this placeholder with a real five-star review. Customers love to see genuine social proof. Excellent work, completed on time and within budget. Would highly recommend.",
  },
  {
    name: "Happy Customer",
    initial: "H",
    date: "6 weeks ago",
    rating: 5,
    text: "Another placeholder review card. Paste your real Google reviews here. Very impressed with the quality of work. The team were friendly, tidy and got the job done quickly.",
  },
  {
    name: "Satisfied Client",
    initial: "S",
    date: "2 months ago",
    rating: 5,
    text: "Replace with a genuine review from a happy customer. Brilliant experience from start to finish. Would not hesitate to use them again and have already recommended to friends and family.",
  },
  {
    name: "Local Resident",
    initial: "L",
    date: "3 months ago",
    rating: 5,
    text: "A fifth placeholder review slot. Fill in with a real verified Google review. Fantastic service. Turned up when they said they would and left the area spotlessly clean. Top marks.",
  },
  {
    name: "Another Customer",
    initial: "A",
    date: "4 months ago",
    rating: 5,
    text: "Sixth placeholder review. Real reviews build trust and improve SEO. Very competitive pricing with no hidden extras. Received a detailed quote quickly and the work was completed to a high standard.",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Scroll the track left or right by one card width */
  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    const cardWidth = 356; // card width + gap
    trackRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="section section--alt"
      id="reviews"
      aria-label="Customer reviews"
    >
      <div className="container">

        {/* Header */}
        <div className="reviews__header">
          <span className="section-eyebrow">What Customers Say</span>
          <h2 className="section-title">Google Reviews</h2>

          {/* Google badge */}
          <div className="reviews__google-badge" aria-label="Google reviews badge">
            <span className="reviews__google-badge-dot" aria-hidden="true" />
            Google Reviews
          </div>

          {/* Overall rating */}
          <div className="reviews__overall">
            <span style={{ color: "var(--color-star)", fontSize: "1.125rem" }}>
              {"★".repeat(5)}
            </span>
            <span>{OVERALL_RATING} out of 5</span>
            <span style={{ color: "var(--color-text-muted)" }}>
              ({TOTAL_REVIEWS} reviews)
            </span>
          </div>
        </div>

        {/* Scrollable track */}
        <div className="reviews__track-wrapper">
          <div
            className="reviews__track"
            ref={trackRef}
            role="list"
            aria-label="Review cards"
          >
            {REVIEWS.map((review, index) => (
              <article
                className="review-card"
                key={index}
                role="listitem"
              >
                {/* Header: avatar + name + date */}
                <div className="review-card__header">
                  <div
                    className="review-card__avatar"
                    aria-hidden="true"
                  >
                    {review.initial}
                  </div>
                  <div>
                    <div className="review-card__name">{review.name}</div>
                    <div className="review-card__date">{review.date}</div>
                  </div>
                </div>

                {/* Star rating */}
                <div
                  className="review-card__stars"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>

                {/* Review text */}
                <p className="review-card__text">{review.text}</p>

                {/* Verified badge */}
                <div className="review-card__verified">
                  <span aria-hidden="true">✓</span>
                  Verified Google Review
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="reviews__nav" role="group" aria-label="Scroll reviews">
          <button
            className="reviews__nav-btn"
            onClick={() => scroll("left")}
            aria-label="Scroll reviews left"
          >
            ←
          </button>
          <button
            className="reviews__nav-btn"
            onClick={() => scroll("right")}
            aria-label="Scroll reviews right"
          >
            →
          </button>
        </div>

      </div>
    </section>
  );
}
