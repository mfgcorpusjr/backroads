import { twMerge } from "tailwind-merge";

import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

type SectionProps = {
  id: string;
  className?: string;
  title: [string, string];
  children: React.ReactNode;
};

export default function Section({
  id,
  className,
  title,
  children,
}: SectionProps) {
  return (
    <section id={id} className={twMerge("section", className)}>
      <Container className="py-24 space-y-12">
        <SectionTitle firstWord={title[0]} secondWord={title[1]} />

        {children}
      </Container>
    </section>
  );
}
