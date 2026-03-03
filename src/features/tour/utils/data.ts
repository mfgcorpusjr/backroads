import { type Tour } from "@/features/tour/utils/types";

import tour1Img from "@/assets/images/tours/tour-1.jpeg";
import tour2Img from "@/assets/images/tours/tour-2.jpeg";
import tour3Img from "@/assets/images/tours/tour-3.jpeg";
import tour4Img from "@/assets/images/tours/tour-4.jpeg";

export const tours: Tour[] = [
  {
    id: 1,
    image: tour1Img,
    date: "Mar 2, 2026",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
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
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
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
      "Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
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
      "Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.",
    location: "Kenya",
    price: 3300,
    duration: 20,
  },
];
