"use client";

import { Icon } from "../UI/Icon";
import styles from "./Footer.module.css";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Testimonials", "testimonials"],
  ["Contact", "contact"],
] as const;

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <button type="button" onClick={() => scrollTo("home")}>
            RANA<span>.</span>
          </button>
          <p>
            Building modern web experiences
            <br />
            with passion and creativity.
          </p>
        </div>

        <nav className={styles.nav} aria-label="Footer navigation">
          {links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className={styles.copy}>
          <span>© 2026 Rana. All rights reserved.</span>
          <button
            type="button"
            aria-label="Back to top"
            onClick={() => scrollTo("home")}
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
