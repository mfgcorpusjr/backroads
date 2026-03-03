import { pageLinks } from "@/utils/data";

type PageLinksProps = {
  className?: string;
};

export default function PageLinks({ className }: PageLinksProps) {
  return (
    <ul className={className}>
      {pageLinks.map((pageLink) => (
        <li key={pageLink.id}>
          <a href={pageLink.href}>{pageLink.text}</a>
        </li>
      ))}
    </ul>
  );
}
