import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive gynecology services in Naperville, IL. Dr. Terri Alexander offers expert care for menopause, hormonal health, preventive wellness, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-[160px] pb-20 px-[60px] max-lg:px-8 max-lg:pt-[130px]">
          <div className="max-w-[1280px] mx-auto">
            <ScrollReveal>
              <nav className="mb-8">
                <ol className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-text-muted list-none">
                  <li>
                    <Link
                      href="/"
                      className="no-underline text-text-muted hover:text-sage-dark transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-border">/</li>
                  <li className="text-sage-dark">Services</li>
                </ol>
              </nav>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                What We Offer
              </span>
              <h1 className="font-heading text-[clamp(42px,4.5vw,68px)] font-light leading-[1.08] text-charcoal mb-8">
                Comprehensive care for{" "}
                <em className="italic text-sage-dark">every chapter</em>
              </h1>
              <p className="text-[18px] text-text-muted leading-[1.8] max-w-[680px]">
                Your health is more than a single concern. We provide expert,
                evidence-based care tailored to every stage of a woman&rsquo;s
                life &mdash; from preventive wellness to specialized treatment.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section className="pb-[120px] px-[60px] max-lg:px-8 max-lg:pb-20">
          <div className="grid grid-cols-3 gap-px bg-border border border-border max-w-[1280px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block bg-warm-white p-10 px-9 transition-all duration-300 relative overflow-hidden no-underline group hover:bg-cream before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sage-dark before:transition-[width] before:duration-400 hover:before:w-full min-h-[220px]"
                >
                  <span className="font-heading text-[13px] text-gold font-normal tracking-[0.08em] mb-4 block">
                    {service.num}
                  </span>
                  <div className="font-heading text-[22px] font-normal text-charcoal mb-3 leading-[1.3]">
                    {service.name}
                  </div>
                  <p className="text-[13.5px] text-text-muted leading-[1.75] mb-4">
                    {service.shortDesc}
                  </p>
                  <span className="text-[12px] text-sage-dark tracking-[0.08em] uppercase font-medium flex items-center gap-2 transition-all duration-300 group-hover:gap-3.5 after:content-['→'] after:text-[14px]">
                    Learn more
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-sage-dark py-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(30px,3vw,44px)] font-light text-warm-white leading-[1.2] mb-6">
              Ready to take the{" "}
              <em className="italic text-gold-light">next step</em>?
            </h2>
            <p className="text-[16px] text-warm-white/70 leading-[1.8] mb-10">
              Whether you have a specific concern or simply want a partner in
              your long-term health, we&rsquo;re here for you.
            </p>
            <Link
              href="/contact"
              className="inline-block py-4 px-10 bg-warm-white text-sage-dark no-underline text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-350 hover:bg-gold hover:text-warm-white hover:-translate-y-px"
            >
              Request an Appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
