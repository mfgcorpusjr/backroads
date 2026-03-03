import { LucideMapPin, LucideDollarSign, LucideTimer } from "lucide-react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { type Tour } from "@/utils/types";

type TourListItemProps = {
  tour: Tour;
};

export default function TourListItem({ tour }: TourListItemProps) {
  return (
    <Card className="w-full pt-0 overflow-hidden">
      <CardHeader className="relative p-0">
        <img
          src={tour.image}
          alt={tour.title}
          className="md:h-48 object-cover"
        />

        <div className="absolute bottom-2 right-0 bg-primary p-1 text-xs text-white">
          {tour.date}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <h4 className="font-semibold">{tour.title}</h4>

        <p className="text-sm text-muted-foreground">{tour.description}</p>

        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-1">
            <LucideMapPin className="size-4" />
            {tour.location}
          </div>

          <div className="flex items-center gap-1">
            <LucideDollarSign className="size-4" />
            {tour.price}
          </div>

          <div className="flex items-center gap-1">
            <LucideTimer className="size-4" />
            {tour.duration} days
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
