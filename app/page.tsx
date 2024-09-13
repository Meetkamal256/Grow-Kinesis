import NavbarSection from "./_components/section/NavbarSection/NavbarSection";
import HeroSection from "./_components/section/HeroSection/HeroSection";
import ProgramSection from "./_components/section/ProgramSection/ProgramSection";
import Testimonials from "./_components/section/Testimonials/Testimonials";
import ContactSection from "./_components/section/ContactSection/ContactSection";
import FooterSection from "./_components/section/FooterSection/FooterSection";

export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <ProgramSection />
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </>
  );
}
