import TourListItem from "@/features/tour/components/TourListItem";

import { tours } from "@/features/tour/utils/data";

export default function TourList() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {tours.map((tour) => (
        <TourListItem key={tour.id} tour={tour} />
      ))}
    </div>
  );
}
