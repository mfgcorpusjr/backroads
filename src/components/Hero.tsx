import { buttonVariants } from "@/components/ui/button";
import Container from "@/components/Container";

import heroImg from "@/assets/images/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-100 md:h-[calc(100vh-80px)]">
      <img
        src={heroImg}
        alt="Hero"
        className="absolute w-full h-full object-cover object-center brightness-40 -z-10"
      />

      <Container className="h-full flex flex-col justify-center items-center gap-8">
        <h2 className="max-w-3xl text-4xl md:text-6xl text-white text-center font-extrabold tracking-tight">
          Discover your{" "}
          <span className="text-primary italic">favorite tour</span> with us
        </h2>

        <p className="max-w-xl text-sm md:text-base text-white text-center leading-7">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          voluptate ullam illo totam, ex provident odio quasi animi laboriosam
          sunt!
        </p>

        <a
          href="#tours"
          className={`cursor-pointer uppercase ${buttonVariants({ size: "lg" })}`}
        >
          Explore Tours
        </a>
      </Container>
    </section>
  );
}
