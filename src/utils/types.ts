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

export type Tour = {
  id: number;
  image: string;
  date: string;
  title: string;
  description: string;
  location: string;
  price: number;
  duration: number;
};
