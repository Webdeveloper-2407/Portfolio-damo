"use client";

import React from "react";
import Image from "next/image";
import dinehome from "../images/project-dinehome.png";
import art from "../images/project-art.png";
import portfolio from "../images/project-portfolio.png";
import { Icon } from "../UI/Icon";
import { SectionHeading } from "../UI/SectionHeading";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Dinehome",
    description:
      "Food delivery platform with modern UI and real-time features.",
    image: dinehome,
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "The Art",
    description:
      "A beautiful exploration website for world wonders and architecture.",
    image: art,
    tags: ["Next.js", "TypeScript", "CSS"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio showcasing work, skills and services.",
    image: portfolio,
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
] as const;

export function Projects() {
  const [message, setMessage] = React.useState("");

  const showDemoMessage = (title: string) => {
    setMessage(
      `${title} is a demo project created for portfolio showcase purposes. The external project URL is intentionally not connected. This is a demonstration of what I can build for clients — you can purchase a custom project and request your preferred design, layout, features, and style.`
    );
  };

  const handleProjectKeyDown = (
    event: React.KeyboardEvent<HTMLElement>,
    title: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      showDemoMessage(title);
    }
  };

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className={`sectionInner ${styles.inner}`}>
        <div className={styles.headingRow}>
          <SectionHeading
            eyebrow="FEATURED PROJECTS"
            title="Some Of My Recent Work"
            subtitle="Here are a few projects I&apos;ve worked on recently."
          />

          <button
            type="button"
            className={styles.viewAll}
            onClick={() => showDemoMessage("All projects")}
          >
            View All Projects
            <Icon name="arrow" size={17} />
          </button>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article
              className={styles.card}
              key={project.title}
              role="button"
              tabIndex={0}
              aria-label={`Open ${project.title} demo notice`}
              onClick={() => showDemoMessage(project.title)}
              onKeyDown={(event) =>
                handleProjectKeyDown(event, project.title)
              }
            >
              <div className={styles.imageArea}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 880px) 100vw, 33vw"
                />

                <span className={styles.external} aria-hidden="true">
                  <Icon name="external" size={19} />
                </span>
              </div>

              <div className={styles.content}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {message ? (
        <div className={styles.demoNotice} role="status" aria-live="polite">
          <div className={styles.demoNoticeIcon} aria-hidden="true">
            <Icon name="external" size={18} />
          </div>

          <div className={styles.demoNoticeText}>
            <strong>Demo Project</strong>

            <span>{message}</span>
          </div>

          <button
            type="button"
            className={styles.demoNoticeClose}
            onClick={() => setMessage("")}
            aria-label="Close demo project message"
          >
            ×
          </button>
        </div>
      ) : null}
    </section>
  );
}