import { LucideFacebook, LucideInstagram, LucideYoutube } from "lucide-react";

import { type PageLink, type SocialLink } from "@/utils/types";

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
