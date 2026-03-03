import Section from "@/components/Section";
import ServiceList from "@/features/service/components/ServiceList";

export default function Services() {
  return (
    <Section id="services" className="bg-muted" title={["Our", "Services"]}>
      <ServiceList />
    </Section>
  );
}
