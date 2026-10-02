import { Icon } from "../UI/Icon";
import { SectionHeading } from "../UI/SectionHeading";
import styles from "./Services.module.css";

const services = [
  {
    icon: "code" as const,
    title: "Web Development",
    text: "Modern, responsive and high-performance websites.",
  },
  {
    icon: "palette" as const,
    title: "UI/UX Design",
    text: "Clean, modern and user-friendly designs.",
  },
  {
    icon: "server" as const,
    title: "Backend Development",
    text: "Scalable backend solutions with APIs and authentication.",
  },
  {
    icon: "users" as const,
    title: "Consultation",
    text: "Guidance and support for your ideas and projects.",
  },
];

export function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className={`sectionInner ${styles.inner}`}>
        <SectionHeading
          eyebrow="MY SERVICES"
          title="What I Can Do For You"
          subtitle="A focused set of services presented as a professional showcase."
          align="center"
        />

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <div className={styles.icon}>
                <Icon name={service.icon} size={29} />
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
