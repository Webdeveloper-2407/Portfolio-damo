"use client";

import React from "react";
import Image from "next/image";
import heroPhoto from "../images/hero-photo.png";
import { Button } from "../UI/Button";
import { Icon } from "../UI/Icon";
import { SocialLinks } from "../UI/SocialLinks";
import styles from "./Hero.module.css";

export function Hero() {
  const [toast, setToast] = React.useState("");

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <section id="home" className={`section ${styles.hero}`}>
      <div className={styles.heroBackdrop} />
      <div className={styles.glow} />

      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>FULL-STACK DEVELOPER</div>

          <h1>
            Hi, I&apos;m
            <span>RANA</span>
          </h1>

          <p className={styles.lead}>
            I build modern, responsive and high-performance web applications
            with Next.js, React, Node.js and MongoDB.
          </p>

          <div className={styles.ctaRow}>
            <Button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              View My Work
            </Button>

            <Button
              variant="secondary"
              icon="send"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Let&apos;s Talk
            </Button>
          </div>

          <div className={styles.socialRow}>
            <SocialLinks onDemoClick={showToast} />
          </div>

          <div className={styles.stats}>
            {[
              ["1+", "Years", "Experience"],
              ["10+", "Projects", "Completed"],
              ["5+", "Happy", "Clients"],
              ["100%", "Client", "Satisfaction"],
            ].map(([value, line1, line2]) => (
              <div className={styles.stat} key={value + line1}>
                <strong>{value}</strong>
                <span>{line1}</span>
                <span>{line2}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.photoFrame}>
            <Image
              src={heroPhoto}
              alt="Developer working at a desk"
              priority
              sizes="(max-width: 960px) 100vw, 48vw"
            />
            <div className={styles.photoOverlay} />
            <div className={styles.handText}>
              Ideas
              <br />
              Code
              <br />
              Design
              <br />
              Deploy
            </div>
          </div>

          <div className={styles.benefits}>
            {[
              ["code", "Clean", "Code"],
              ["palette", "Modern", "Design"],
              ["server", "Fast", "Performance"],
              ["users", "Real", "Results"],
            ].map(([icon, a, b]) => (
              <div className={styles.benefit} key={a}>
                <div className={styles.benefitIcon}>
                  <Icon name={icon as React.ComponentProps<typeof Icon>["name"]} size={23} />
                </div>
                <div>
                  <strong>{a}</strong>
                  <span>{b}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomCurve} />

      {toast ? <div className="toast" role="status">{toast}</div> : null}
    </section>
  );
}
