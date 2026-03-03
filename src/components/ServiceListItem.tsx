import { type Service } from "@/utils/types";

type ServiceListItemProps = {
  service: Service;
};

export default function ServiceListItem({ service }: ServiceListItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary p-2 rounded-full text-white">
        <service.icon />
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold">{service.title}</h4>
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </div>
    </div>
  );
}
