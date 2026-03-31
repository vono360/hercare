import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-2 relative overflow-hidden max-lg:grid-cols-1"
    >
      {/* Left content */}
      <div className="flex flex-col justify-center py-[160px] px-[60px] pb-20 relative z-2 max-lg:px-8 max-lg:pt-[140px]">
        <p className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-8 animate-fade-up animate-delay-1">
          Board-Certified OB/GYN &middot; Opening Spring 2026
        </p>
        <h1 className="font-heading text-[clamp(52px,5.5vw,82px)] font-light leading-[1.08] tracking-[-0.01em] text-charcoal mb-8 animate-fade-up animate-delay-2">
          Women&rsquo;s health,
          <br />
          reimagined for
          <br />
          <em className="italic text-sage-dark">every stage</em> of life.
        </h1>
        <p className="text-[16px] font-light text-text-muted max-w-[420px] leading-[1.8] mb-[52px] animate-fade-up animate-delay-3">
          A new kind of gynecology practice &mdash; where integrative care,
          genuine listening, and evidence-based medicine meet to support your
          whole health and lifelong vitality.
        </p>
        <div className="flex gap-5 items-center animate-fade-up animate-delay-4">
          <Link
            href="/contact"
            className="inline-block py-4 px-10 bg-sage-dark text-warm-white no-underline text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-350 hover:bg-charcoal hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(42,42,42,0.15)]"
          >
            Request an Appointment
          </Link>
          <Link
            href="/services"
            className="text-[13px] text-text-muted no-underline tracking-[0.06em] flex items-center gap-2.5 transition-all duration-300 hover:text-sage-dark hover:gap-3.5 after:content-['→'] after:text-[16px]"
          >
            Explore services
          </Link>
        </div>
        <div className="mt-[72px] pt-9 border-t border-border flex gap-12 animate-fade-up animate-delay-5 max-sm:flex-wrap max-sm:gap-7">
          <div>
            <div className="font-heading text-[36px] font-light text-charcoal leading-none mb-1">
              24+
            </div>
            <div className="text-[11px] tracking-[0.1em] uppercase text-text-muted">
              Years of Practice
            </div>
          </div>
          <div>
            <div className="font-heading text-[36px] font-light text-charcoal leading-none mb-1">
              13
            </div>
            <div className="text-[11px] tracking-[0.1em] uppercase text-text-muted">
              Specialty Services
            </div>
          </div>
          <div>
            <div className="font-heading text-[36px] font-light text-charcoal leading-none mb-1">
              5&#9733;
            </div>
            <div className="text-[11px] tracking-[0.1em] uppercase text-text-muted">
              Patient Rating
            </div>
          </div>
        </div>
      </div>

      {/* Right image */}
      <div className="relative overflow-hidden max-lg:hidden">
        <div className="absolute inset-0 animate-fade-in animate-delay-2">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-cream to-transparent z-1 [background:linear-gradient(120deg,var(--color-cream)_0%,transparent_40%)]" />
          {/* Background organic shape */}
          <div className="absolute top-[8%] right-[8%] w-[82%] h-[84%] bg-gradient-to-br from-sage-light via-taupe-light to-gold-light rounded-[2px_60%_2px_40%]" />
          {/* Photo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-[38%] -translate-y-1/2 w-[66%] aspect-[3/4] overflow-hidden z-2 shadow-[0_32px_80px_rgba(42,42,42,0.18)]">
            <Image
              src="/images/dr-alexander-hero.jpg"
              alt="Dr. Terri Alexander, MD — Board-Certified OB/GYN"
              fill
              className="object-cover object-top"
              priority
              sizes="(max-width: 1024px) 0vw, 33vw"
            />
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 bg-cream/96 py-3.5 px-6 text-center whitespace-nowrap z-3 backdrop-blur-[8px]">
              <span className="font-heading text-[18px] font-normal text-charcoal block">
                Dr. Terri Alexander
              </span>
              <span className="text-[10px] tracking-[0.14em] uppercase text-text-muted block mt-[3px]">
                MD &middot; OB/GYN &middot; Board Certified
              </span>
            </div>
          </div>
          {/* Rotating decoration */}
          <div className="absolute bottom-[10%] left-[5%] w-40 h-40 border border-sage/25 rounded-full z-2 animate-rotate before:content-[''] before:absolute before:inset-5 before:border before:border-sage/15 before:rounded-full" />
        </div>
      </div>
    </section>
  );
}
