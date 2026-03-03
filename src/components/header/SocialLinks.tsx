import { socialLinks } from "@/utils/data";

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className }: SocialLinksProps) {
  return (
    <ul className={className}>
      {socialLinks.map((socialLink) => (
        <li key={socialLink.id}>
          <a href={socialLink.href} target="_blank">
            <socialLink.icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
