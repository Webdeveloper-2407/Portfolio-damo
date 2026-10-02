"use client";

import React from "react";
import { Footer } from "../Footer/Footer";
import { Button } from "../UI/Button";
import { Icon } from "../UI/Icon";
import { SocialLinks } from "../UI/SocialLinks";
import styles from "./Contact.module.css";

export function Contact() {
  const [message, setMessage] = React.useState("");

  const show = (text: string) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2300);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.eyebrow}>LET&apos;S WORK TOGETHER</div>
          <h2>Have a Project in Mind?</h2>
          <p>
            I&apos;m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className={styles.info}>
          <div className={styles.item}>
            <Icon name="mail" size={22} />
            <span>rana.dev@example.com</span>
          </div>

          <div className={styles.item}>
            <Icon name="location" size={22} />
            <span>Pakistan</span>
          </div>

          <div className={styles.item}>
            <Icon name="clock" size={22} />
            <span>Available for freelance work</span>
          </div>

          <div className={styles.socialRow}>
            <SocialLinks onDemoClick={show} />
          </div>
        </div>

        <Button
          icon="send"
          onClick={() => show("Message sending is disabled in demo mode.")}
        >
          Send a Message
        </Button>
      </div>

      <div className={styles.footerSlot}>
        <Footer />
      </div>

      {message ? <div className="toast" role="status">{message}</div> : null}
    </section>
  );
}
