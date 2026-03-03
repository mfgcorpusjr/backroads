import type { LucideIcon } from "lucide-react";

export type PageLink = {
  id: number;
  href: string;
  text: string;
};

export type SocialLink = {
  id: number;
  href: string;
  icon: LucideIcon;
};

export type Service = {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
};
