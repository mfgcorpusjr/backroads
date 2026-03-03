import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TourListItem from "@/components/TourListItem";

import { tours } from "@/utils/data";

export default function Tours() {
  return (
    <section id="tours" className="section">
      <Container className="py-24 space-y-12">
        <SectionTitle primary="Featured" secondary="Tours" />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tours.map((tour) => (
            <TourListItem key={tour.id} tour={tour} />
          ))}
        </div>
      </Container>
    </section>
  );
}
