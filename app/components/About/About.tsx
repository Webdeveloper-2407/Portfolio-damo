"use client";

import React from "react";
import Image from "next/image";
import aboutPhoto from "../images/about-photo.png";
import { Button } from "../UI/Button";
import { Icon } from "../UI/Icon";
import styles from "./About.module.css";

export function About() {
  const [toast, setToast] = React.useState("");

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  const skills = [
    ["code", "Frontend Development"],
    ["palette", "Modern UI/UX Design"],
    ["server", "Backend Development"],
    ["send", "API Integration"],
    ["location", "Database Management"],
    ["download", "Deployment & DevOps"],
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.photoCol}>
          <div className={styles.goldFrame} />
          <div className={styles.blueFrame} />

          <Image
            src={aboutPhoto}
            alt="Developer portrait"
            className={styles.photo}
            sizes="(max-width: 900px) 90vw, 380px"
          />

          <div className={styles.signature}>Rana.</div>

          <div className={styles.experienceBadge}>
            <div>
              <strong>1+</strong>
              <span>
                Years
                <br />
                Experience
              </span>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          <div className={styles.eyebrow}>ABOUT ME</div>

          <h2>
            Turning Ideas Into
            <br />
            <span>Real Products</span>
          </h2>

          <p>
            I&apos;m a passionate Full-Stack Developer who loves creating
            beautiful, functional and user-friendly websites. I enjoy turning
            complex problems into simple, elegant solutions.
          </p>

          <div className={styles.skillGrid}>
            {skills.map(([icon, label]) => (
              <div className={styles.skillRow} key={label}>
                <div className={styles.skillIcon}>
                  <Icon name={icon as React.ComponentProps<typeof Icon>["name"]} size={19} />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <Button
            icon="download"
            onClick={() => showToast("CV download is disabled in demo mode.")}
          >
            Download CV
          </Button>
        </div>

        <aside className={styles.quote}>
          <div className={styles.quoteMark}>
            <Icon name="quote" size={26} />
          </div>
          <p>
            Good design
            <br />
            turns ideas into
            <br />
            <span>opportunities.</span>
          </p>
          <div className={styles.quoteLine} />
        </aside>
      </div>

      {toast ? <div className="toast" role="status">{toast}</div> : null}
    </section>
  );
}
