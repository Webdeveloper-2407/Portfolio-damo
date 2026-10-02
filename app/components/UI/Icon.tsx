import React from "react";

export type IconName =
  | "arrow"
  | "moon"
  | "sun"
  | "github"
  | "instagram"
  | "discord"
  | "linkedin"
  | "download"
  | "send"
  | "external"
  | "code"
  | "palette"
  | "server"
  | "users"
  | "mail"
  | "location"
  | "clock"
  | "quote"
  | "check"
  | "chevron-left"
  | "chevron-right";

type Props = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

export function Icon({ name, size = 22, strokeWidth = 1.8 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow":
      return <svg {...common}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
    case "moon":
      return <svg {...common}><path d="M21 12.8A8.5 8.5 0 0 1 11.2 3 7 7 0 1 0 21 12.8Z" /></svg>;
    case "sun":
      return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>;
    case "github":
      return <svg {...common}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.2 0 6.5-1.6 6.5-7.1A5.6 5.6 0 0 0 19 3.5 5.2 5.2 0 0 0 18.9 0S17.6-.4 15 1.5a13.5 13.5 0 0 0-6 0C6.4-.4 5.1 0 5.1 0A5.2 5.2 0 0 0 5 3.5a5.6 5.6 0 0 0-1.5 3.9C3.5 12.9 6.8 14.5 10 14.5A4.8 4.8 0 0 0 9 18v4" /><path d="M9 18c-4 .9-4-2-5.6-2" /></svg>;
    case "instagram":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".8" fill="currentColor" stroke="none" /></svg>;
    case "discord":
      return <svg {...common}><path d="M7 7.2a8.2 8.2 0 0 1 5-1.7 8.2 8.2 0 0 1 5 1.7c1.3 1.9 2 4.1 2 6.4-.8 1.1-1.9 2-3.1 2.6l-1-1.4" /><path d="M7 7.2c-1.3 1.9-2 4.1-2 6.4.8 1.1 1.9 2 3.1 2.6l1-1.4M9.3 12h.1M14.6 12h.1M9.6 15.5c1.6.7 3.2.7 4.8 0" /></svg>;
    case "linkedin":
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11v6M8 8v.01M12 17v-4a2 2 0 0 1 4 0v4M12 11v6" /></svg>;
    case "download":
      return <svg {...common}><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></svg>;
    case "send":
      return <svg {...common}><path d="m3 11 18-8-8 18-2.5-7.5L3 11Z" /><path d="m10.5 13.5 4-4" /></svg>;
    case "external":
      return <svg {...common}><path d="M14 4h6v6" /><path d="M10 14 20 4" /><path d="M19 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6" /></svg>;
    case "code":
      return <svg {...common}><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></svg>;
    case "palette":
      return <svg {...common}><path d="M12 3a9 9 0 0 0 0 18h1.2a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h1.1A7.9 7.9 0 0 0 21 10C21 6.1 17 3 12 3Z" /><circle cx="7.4" cy="9" r="1" /><circle cx="10.6" cy="6.8" r="1" /><circle cx="15.3" cy="6.8" r="1" /></svg>;
    case "server":
      return <svg {...common}><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></svg>;
    case "users":
      return <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="4" /><path d="M17 11a4 4 0 0 0 0-8" /><path d="M21 21v-2a4 4 0 0 0-3-3.8" /></svg>;
    case "mail":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "location":
      return <svg {...common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "clock":
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "quote":
      return <svg {...common}><path d="M8 10H5.5A2.5 2.5 0 0 0 3 12.5v3A2.5 2.5 0 0 0 5.5 18H8a2.5 2.5 0 0 0 2.5-2.5v-9H8v4ZM19 10h-2.5a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5H19a2.5 2.5 0 0 0 2.5-2.5v-9H19v4Z" /></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
    case "chevron-left":
      return <svg {...common}><path d="m14 18-6-6 6-6" /></svg>;
    case "chevron-right":
      return <svg {...common}><path d="m10 6 6 6-6 6" /></svg>;
    default:
      return null;
  }
}
