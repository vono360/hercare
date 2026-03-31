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

      <div className="grid grid-cols-3 gap-5 max-w-[1280px] mx-auto max-lg:grid-cols-2 max-sm:grid-cols-1">
        {services.map((service, i) => (
          <ScrollReveal key={service.slug} delay={(i % 3) as 0 | 1 | 2}>
            <Link
              href={`/services/${service.slug}`}
              className="group block bg-cream border border-border/60 p-9 pb-10 no-underline transition-all duration-300 hover:border-sage-light hover:shadow-[0_8px_30px_rgba(92,114,96,0.08)] hover:-translate-y-1 h-full"
            >
              <span className="font-heading text-[13px] text-gold font-normal tracking-[0.08em] mb-5 block">
                {service.num}
              </span>
              <div className="font-heading text-[22px] font-normal text-charcoal mb-3 leading-[1.3] group-hover:text-sage-dark transition-colors duration-300">
                {service.name}
              </div>
              <p className="text-[13.5px] text-text-muted leading-[1.75] mb-5">
                {service.shortDesc}
              </p>
              <span className="text-[11px] text-sage-dark tracking-[0.1em] uppercase font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gap-3 after:content-['→'] after:text-[14px]">
                Learn more
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
