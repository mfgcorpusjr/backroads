import Container from "@/components/Container";
import PageLinks from "@/components/header/PageLinks";
import SocialLinks from "@/components/header/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-24">
      <Container className="flex flex-col justify-center items-center gap-8">
        <PageLinks
          className="flex items-center gap-8"
          itemClassName="text-white"
        />

        <SocialLinks
          className="flex items-center gap-4"
          itemClassName="text-white"
        />

        <p className="text-sm text-muted-foreground text-center">
          Copyright &copy; BackRoads Travel Tours Company{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
