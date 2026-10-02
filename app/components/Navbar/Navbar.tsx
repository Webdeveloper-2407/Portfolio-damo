"use client";

import { useEffect, useState } from "react";
import { Button } from "../UI/Button";
import { Icon } from "../UI/Icon";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Contact", id: "contact" },
];

const getValidSectionId = (id: string | null) =>
  navItems.some((item) => item.id === id) ? id! : "home";

export function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Keep the active navbar item in sync with a direct URL hash such as #home.
    const syncHash = () => {
      setActiveId(getValidSectionId(window.location.hash.slice(1)));
    };

    const initialHashId = getValidSectionId(window.location.hash.slice(1));
    setActiveId(initialHashId);
    window.addEventListener("hashchange", syncHash);

    // Determine the active section from the section closest to the middle of
    // the visible viewport. This is more reliable for full-screen sections
    // than IntersectionObserver thresholds, especially while smooth scrolling.
    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestId = "home";
      let closestDistance = Number.POSITIVE_INFINITY;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        // Ignore sections that are completely outside the viewport buffer.
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        if (distance < closestDistance) {
          closestDistance = distance;
          closestId = item.id;
        }
      });

      setActiveId(closestId);
    };

    // Give the browser time to finish its initial #hash positioning before
    // measuring the section centers. Without this delay, a direct URL such as
    // /#contact could briefly measure at the top of the page and incorrectly
    // activate Home.
    const initialSyncFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(updateActiveSection);
    });

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    try {
      const storedTheme = window.localStorage.getItem("demo-portfolio-theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
      }
    } catch {
      // Use dark theme when localStorage is unavailable.
    }

    return () => {
      window.cancelAnimationFrame(initialSyncFrame);
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    // Move the active underline immediately when the user clicks.
    setActiveId(id);
    setOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Keep the URL/hash in sync without causing a page reload.
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;

    try {
      window.localStorage.setItem("demo-portfolio-theme", nextTheme);
    } catch {
      // Theme still changes for the current session when storage is unavailable.
    }
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <button
          className={styles.logo}
          type="button"
          onClick={() => scrollTo("home")}
          aria-label="Go to home"
        >
          RANA<span>.</span>
        </button>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.navButton} ${
                activeId === item.id ? styles.active : ""
              }`}
              aria-current={activeId === item.id ? "page" : undefined}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            className={`${styles.theme} ${
              theme === "light" ? styles.themeLight : ""
            }`}
            type="button"
            role="switch"
            aria-checked={theme === "light"}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            onClick={handleTheme}
          >
            <span className={styles.themeTrack}>
              <span className={styles.themeThumb}>
                <Icon name={theme === "dark" ? "moon" : "sun"} size={16} />
              </span>
            </span>
          </button>

          <Button onClick={() => scrollTo("contact")}>Let&apos;s Talk</Button>

          <button
            className={styles.mobileToggle}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.navButton} ${
              activeId === item.id ? styles.active : ""
            }`}
            aria-current={activeId === item.id ? "page" : undefined}
            onClick={() => scrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
