import {
  LucideFacebook,
  LucideInstagram,
  LucideYoutube,
  LucideWallet,
  LucideMountain,
  LucideRockingChair,
} from "lucide-react";

import type { PageLink, SocialLink, Service, Tour } from "@/utils/types";
import tour1Img from "@/assets/images/tour-1.jpeg";
import tour2Img from "@/assets/images/tour-2.jpeg";
import tour3Img from "@/assets/images/tour-3.jpeg";
import tour4Img from "@/assets/images/tour-4.jpeg";

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

export const tours: Tour[] = [
  {
    id: 1,
    image: tour1Img,
    date: "Mar 2, 2026",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet consecte adipisicing elit. Placeat nostrum in inventore porro tempora",
    location: "China",
    price: 2100,
    duration: 6,
  },
  {
    id: 2,
    image: tour2Img,
    date: "Feb 25, 2026",
    title: "Best of Java",
    description:
      "Lorem ipsum dolor sit amet consecte adipisicing elit. Placeat nostrum in inventore porro tempora",
    location: "Indonesia",
    price: 1400,
    duration: 11,
  },
  {
    id: 3,
    image: tour3Img,
    date: "Feb 20, 2026",
    title: "Explore Hongkong",
    description:
      "Lorem ipsum dolor sit amet consecte adipisicing elit. Placeat nostrum in inventore porro tempora",
    location: "Hongkong",
    price: 5000,
    duration: 8,
  },
  {
    id: 4,
    image: tour4Img,
    date: "Jan 10, 2026",
    title: "Kenya Highlights",
    description:
      "Lorem ipsum dolor sit amet consecte adipisicing elit. Placeat nostrum in inventore porro tempora",
    location: "Kenya",
    price: 3300,
    duration: 20,
  },
];
