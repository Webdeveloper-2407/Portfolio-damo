"use client";

import { Icon } from "./Icon";
import styles from "./SocialLinks.module.css";

type Props = {
  onDemoClick: (label: string) => void;
};

export function SocialLinks({ onDemoClick }: Props) {
  const links = [
    { name: "GitHub", icon: "github" as const },
    { name: "Instagram", icon: "instagram" as const },
    { name: "Discord", icon: "discord" as const },
    { name: "LinkedIn", icon: "linkedin" as const },
  ];

  return (
    <div className={styles.links}>
      {links.map((item) => (
        <button
          key={item.name}
          type="button"
          aria-label={`${item.name} demo`}
          title={`${item.name} (demo)`}
          onClick={() =>
            onDemoClick(
              `${item.name} is a demo-only button. No external account is connected.`
            )
          }
        >
          <Icon name={item.icon} size={17} />
        </button>
      ))}
    </div>
  );
}
