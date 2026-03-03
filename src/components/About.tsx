import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

import aboutImg from "@/assets/images/about.jpeg";

export default function About() {
  return (
    <section id="about" className="section">
      <Container className="py-24 space-y-12">
        <SectionTitle primary="About" secondary="Us" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="border-8 border-primary rounded-4xl">
            <img
              src={aboutImg}
              alt="About"
              className="w-full object-cover translate-4 rounded-4xl"
            />
          </div>

          <div className="space-y-4">
            <h5 className="text-2xl font-semibold">Explore the Difference</h5>

            <p className="text-sm text-muted-foreground leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              nostrum in inventore porro tempora reiciendis nam minus molestiae
              officiis sunt fuga dolore qui, eum asperiores sapiente? Nesciunt,
              repellendus quasi veniam delectus vero voluptatum dolor nemo
              perspiciatis nam. Quia, itaque voluptatum?
            </p>

            <p className="text-sm text-muted-foreground leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              libero fugiat? Expedita nostrum corrupti quo dolorem quasi et.
              Qui, suscipit.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
