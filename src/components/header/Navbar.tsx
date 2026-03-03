import Container from "@/components/Container";
import Logo from "@/components/header/Logo";

export default function Navbar() {
  return (
    <div>
      <Container className="flex justify-between items-center py-6">
        <Logo />
      </Container>
    </div>
  );
}
