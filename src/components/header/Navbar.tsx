import Container from "@/components/Container";
import Logo from "@/components/header/Logo";
import MobileMenu from "@/components/header/MobileMenu";
import PageLinks from "@/components/header/PageLinks";
import SocialLinks from "@/components/header/SocialLinks";

export default function Navbar() {
  return (
    <nav>
      <Container className="flex justify-between items-center py-6">
        <Logo />

        <MobileMenu />

        <PageLinks className="hidden md:flex items-center gap-8" />

        <SocialLinks className="hidden md:flex items-center gap-4" />
      </Container>
    </nav>
  );
}
