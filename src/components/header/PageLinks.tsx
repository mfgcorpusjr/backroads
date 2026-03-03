import { pageLinks } from "@/utils/data";

type PageLinksProps = {
  className?: string;
  itemClassName?: string;
};

export default function PageLinks({
  className,
  itemClassName,
}: PageLinksProps) {
  return (
    <ul className={className}>
      {pageLinks.map((pageLink) => (
        <li key={pageLink.id}>
          <a href={pageLink.href} className={itemClassName}>
            {pageLink.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
