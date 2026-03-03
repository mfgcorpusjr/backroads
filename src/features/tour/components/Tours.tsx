import Section from "@/components/Section";
import TourList from "@/features/tour/components/TourList";

export default function Tours() {
  return (
    <Section id="tours" title={["Featured", "Tours"]}>
      <TourList />
    </Section>
  );
}
