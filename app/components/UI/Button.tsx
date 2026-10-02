import React from "react";
import { Icon } from "./Icon";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: "arrow" | "download" | "send";
  className?: string;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  icon = "arrow",
  className = "",
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className={styles.icon}>
        <Icon name={icon} size={18} />
      </span>
    </button>
  );
}
