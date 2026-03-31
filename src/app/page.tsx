import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Philosophy from "@/components/sections/Philosophy";
import ServicesGrid from "@/components/sections/ServicesGrid";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <ServicesGrid />
        <About />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
