import { LucideMapPin, LucideDollarSign, LucideTimer } from "lucide-react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { type Tour } from "@/features/tour/utils/types";

type TourListItemProps = {
  tour: Tour;
};

export default function TourListItem({ tour }: TourListItemProps) {
  return (
    <Card className="w-full pt-0 overflow-hidden shadow-none">
      <CardHeader className="relative p-0">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full md:h-48 object-cover"
        />

        <div className="absolute bottom-2 right-0 bg-primary p-1 text-xs text-white">
          {tour.date}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <h4 className="font-semibold">{tour.title}</h4>

        <p className="text-sm text-muted-foreground">{tour.description}</p>

        <div className="flex items-center gap-1">
          <LucideMapPin className="size-4" />

          <span className="text-xs">{tour.location}</span>
        </div>

        <div className="flex items-center gap-1">
          <LucideDollarSign className="size-4" />

          <span className="text-xs">{tour.price}</span>
        </div>

        <div className="flex items-center gap-1">
          <LucideTimer className="size-4" />

          <span className="text-xs">{tour.duration} days</span>
        </div>
      </CardContent>
    </Card>
  );
}
