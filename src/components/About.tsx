import Section from "@/components/Section";
import { Button } from "@/components/ui/button";

import aboutImg from "@/assets/images/about.jpeg";

export default function About() {
  return (
    <Section id="about" title={["About", "Backroads"]}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="border-4 border-dashed border-primary rounded-4xl">
          <img
            src={aboutImg}
            alt="About"
            className="w-full object-cover translate-4 rounded-4xl"
          />
        </div>

        <div className="space-y-4">
          <h5 className="text-xl md:text-2xl font-semibold">
            Explore the Difference
          </h5>

          <p className="text-sm text-muted-foreground leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            nostrum in inventore porro tempora reiciendis nam minus molestiae
            officiis sunt fuga dolore qui, eum asperiores sapiente? Nesciunt,
            repellendus quasi veniam delectus vero voluptatum dolor nemo
            perspiciatis nam. Quia, itaque voluptatum?
          </p>

          <p className="text-sm text-muted-foreground leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            libero fugiat? Expedita nostrum corrupti quo dolorem quasi et. Qui,
            suscipit.
          </p>

          <Button size="sm" className="cursor-pointer">
            Read More
          </Button>
        </div>
      </div>
    </Section>
  );
}
