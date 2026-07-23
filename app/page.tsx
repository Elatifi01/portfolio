import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/navbar";
import Projects from "@/components/Projects";
import SectionRevealController from "@/components/SectionRevealController";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <SectionRevealController />
      <Navbar />
      <main>
        <HeroSection />
        <Projects />
        <Services />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
