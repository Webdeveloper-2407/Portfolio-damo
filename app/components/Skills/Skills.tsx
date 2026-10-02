import { SectionHeading } from "../UI/SectionHeading";
import styles from "./Skills.module.css";

const skills = [
  ["N", "Next.js", "core"],
  ["⚛", "React", "react"],
  ["TS", "TypeScript", "ts"],
  ["JS", "Node.js", "node"],
  ["ex", "Express.js", "express"],
  ["M", "MongoDB", "mongo"],
  ["≈", "Tailwind CSS", "tailwind"],
  ["◆", "Git", "git"],
  ["▲", "Vercel", "vercel"],
  ["F", "Figma", "figma"],
] as const;

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className={`sectionInner ${styles.inner}`}>
        <SectionHeading
          eyebrow="MY SKILLS"
          title="Technologies I Work With"
          subtitle="Tools and technologies I use to build modern web applications."
          align="center"
        />

        <div className={styles.grid}>
          {skills.map(([symbol, label, tone]) => (
            <div className={styles.card} key={label}>
              <div className={`${styles.logo} ${styles[tone]}`}>{symbol}</div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
