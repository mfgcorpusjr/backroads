import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ServiceListItem from "@/components/ServiceListItem";

import { services } from "@/utils/data";

export default function Services() {
  return (
    <section id="services" className="section bg-muted">
      <Container className="py-24 space-y-12">
        <SectionTitle primary="Our" secondary="Services" />

        <div className="flex flex-col md:flex-row items-center gap-8">
          {services.map((service) => (
            <ServiceListItem key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
