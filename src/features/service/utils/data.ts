import { LucideWallet, LucideMountain, LucideRockingChair } from "lucide-react";

import { type Service } from "@/features/service/utils/types";

export const services: Service[] = [
  {
    id: 1,
    icon: LucideWallet,
    title: "Saving Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat.",
  },
  {
    id: 2,
    icon: LucideMountain,
    title: "Endless Hiking",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.",
  },
  {
    id: 3,
    icon: LucideRockingChair,
    title: "Amazing Comfort",
    description:
      "Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
  },
];
