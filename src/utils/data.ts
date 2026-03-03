import {
  LucideFacebook,
  LucideInstagram,
  LucideYoutube,
  LucideWallet,
  LucideMountain,
  LucideRockingChair,
} from "lucide-react";

import type { PageLink, SocialLink, Service } from "@/utils/types";

export const pageLinks: PageLink[] = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

export const socialLinks: SocialLink[] = [
  { id: 1, href: "https://www.facebook.com", icon: LucideFacebook },
  { id: 2, href: "https://www.instagram.com", icon: LucideInstagram },
  { id: 3, href: "https://www.youtube.com", icon: LucideYoutube },
];

export const services: Service[] = [
  {
    id: 1,
    icon: LucideWallet,
    title: "Saving Money",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum in inventore",
  },
  {
    id: 2,
    icon: LucideMountain,
    title: "Endless Hiking",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum in inventore",
  },
  {
    id: 3,
    icon: LucideRockingChair,
    title: "Amazing Comfort",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nostrum in inventore",
  },
];
