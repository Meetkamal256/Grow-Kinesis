import Hero from "./_components/section/HeroSection/HeroSection";
import Navbar from "./_components/section/NavbarSection/NavbarSection";
import Programs from "./_components/section/Programs/ProgramSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
    </>
  );
}
