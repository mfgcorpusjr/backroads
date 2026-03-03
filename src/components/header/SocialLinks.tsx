import { socialLinks } from "@/utils/data";

type SocialLinksProps = {
  className?: string;
  itemClassName?: string;
};

export default function SocialLinks({
  className,
  itemClassName,
}: SocialLinksProps) {
  return (
    <ul className={className}>
      {socialLinks.map((socialLink) => (
        <li key={socialLink.id}>
          <a href={socialLink.href} target="_blank" className={itemClassName}>
            <socialLink.icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
