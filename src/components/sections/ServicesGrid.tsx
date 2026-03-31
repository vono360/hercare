import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { services } from "@/lib/services";

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-[120px] px-[60px] bg-warm-white max-lg:px-8 max-lg:py-20"
    >
      <ScrollReveal className="text-center max-w-[580px] mx-auto mb-[72px]">
        <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
          What We Offer
        </span>
        <h2 className="font-heading text-[clamp(36px,3.5vw,54px)] font-light leading-[1.12] text-charcoal mb-8">
          Comprehensive care for{" "}
          <em className="italic text-sage-dark">every chapter</em>
        </h2>
        <p className="text-[16px] text-text-muted leading-[1.9]">
          Your health is more than a single concern. We provide expert,
          evidence-based care tailored to every stage of a woman&rsquo;s life.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-px bg-border border border-border max-w-[1280px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, i) => (
          <ScrollReveal
            key={service.slug}
            delay={(i % 3) as 0 | 1 | 2}
          >
            <Link
              href={`/services/${service.slug}`}
              className="block bg-warm-white p-10 px-9 transition-all duration-300 relative overflow-hidden no-underline group hover:bg-cream before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-sage-dark before:transition-[width] before:duration-300 hover:before:w-full"
            >
              <span className="font-heading text-[13px] text-gold font-normal tracking-[0.08em] mb-4 block">
                {service.num}
              </span>
              <div className="font-heading text-[22px] font-normal text-charcoal mb-3 leading-[1.3]">
                {service.name}
              </div>
              <p className="text-[13.5px] text-text-muted leading-[1.75]">
                {service.shortDesc}
              </p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
