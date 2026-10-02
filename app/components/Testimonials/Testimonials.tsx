"use client";

import React from "react";
import { Icon } from "../UI/Icon";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Business Owner",
    quote: "Amazing work! Delivered exactly what I wanted with great communication.",
  },
  {
    name: "Sarah Ali",
    role: "Entrepreneur",
    quote: "Highly recommended! Professional, creative and always on time.",
  },
  {
    name: "Hamza Sheikh",
    role: "Student",
    quote: "Great experience working with Rana. He built a beautiful and fast website for my project.",
  },
];

export function Testimonials() {
  const [active, setActive] = React.useState(0);

  const prev = () =>
    setActive((value) => (value - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setActive((value) => (value + 1) % testimonials.length);

  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.topline}>
          <div>
            <div className={styles.eyebrow}>TESTIMONIALS</div>
            <h2>What People Say</h2>
          </div>

          <div className={styles.controls}>
            <button type="button" aria-label="Previous testimonial" onClick={prev}>
              <Icon name="chevron-left" size={19} />
            </button>
            <button type="button" aria-label="Next testimonial" onClick={next}>
              <Icon name="chevron-right" size={19} />
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item, index) => (
            <article
              className={`${styles.card} ${index === active ? styles.active : ""}`}
              key={item.name}
            >
              <div className={styles.avatar}>
                {item.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>

              <div className={styles.body}>
                <div className={styles.person}>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>

                <div className={styles.stars}>★★★★★</div>
                <p>&ldquo;{item.quote}&rdquo;</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
