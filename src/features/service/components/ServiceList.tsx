import ServiceListItem from "@/features/service/components/ServiceListItem";

import { services } from "@/features/service/utils/data";

export default function ServiceList() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {services.map((service) => (
        <ServiceListItem key={service.id} service={service} />
      ))}
    </div>
  );
}
