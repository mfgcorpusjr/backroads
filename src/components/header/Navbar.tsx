import Container from "@/components/Container";
import Logo from "@/components/header/Logo";
import PageLinks from "@/components/header/PageLinks";
import SocialLinks from "@/components/header/SocialLinks";

export default function Navbar() {
  return (
    <nav>
      <Container className="flex justify-between items-center py-6">
        <Logo />

        <PageLinks className="flex items-center gap-4" />

        <SocialLinks className="flex items-center gap-4" />
      </Container>
    </nav>
  );
}
