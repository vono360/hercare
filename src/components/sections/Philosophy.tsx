import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
  {
    title: "Evidence-Based",
    desc: "Every recommendation grounded in the latest clinical research and guidelines.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Unhurried",
    desc: "Appointments designed to ensure you feel heard, not rushed through.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: "Patient Partnership",
    desc: "You are an active participant in every care decision \u2014 not a passive recipient.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Whole-Person",
    desc: "Integrating hormonal, mental, sexual, and metabolic health into one cohesive plan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-[var(--section-gap)] px-[60px] grid grid-cols-2 gap-20 items-center max-w-[1400px] mx-auto max-lg:grid-cols-1 max-lg:px-8 max-lg:py-20"
      style={{ "--section-gap": "120px" } as React.CSSProperties}
    >
      {/* Content */}
      <ScrollReveal>
        <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
          Our Philosophy
        </span>
        <h2 className="font-heading text-[clamp(36px,3.5vw,54px)] font-light leading-[1.12] text-charcoal mb-8">
          Care that honors the{" "}
          <em className="italic text-sage-dark">whole woman</em>
        </h2>
        <p className="text-[16px] text-text-muted leading-[1.9] mb-5">
          At HerCare Gynecology, we believe exceptional healthcare begins with
          truly listening. Dr. Alexander brings over two decades of expertise and
          a deep conviction that every woman deserves care that is current,
          personalized, and genuinely attentive to her whole life.
        </p>
        <p className="text-[16px] text-text-muted leading-[1.9] mb-5">
          We go beyond treating symptoms &mdash; we partner with you on a
          journey toward sustained health, hormonal balance, and lifelong
          vitality.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-12 max-sm:grid-cols-1">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="p-7 bg-warm-white border border-border transition-all duration-350 hover:border-sage-light hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(92,114,96,0.08)]">
                <div className="w-9 h-9 mb-4 text-sage">{value.icon}</div>
                <div className="font-heading text-[20px] font-normal text-charcoal mb-2">
                  {value.title}
                </div>
                <div className="text-[13px] text-text-muted leading-[1.7]">
                  {value.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>

      {/* Image */}
      <ScrollReveal delay={2} className="relative pb-[30px]">
        <div className="w-full aspect-[4/5] bg-gradient-to-br from-taupe-light via-sage-light to-gold-light overflow-hidden relative">
          <Image
            src="/images/dr-alexander-philosophy.jpg"
            alt="Dr. Terri Alexander providing personalized care"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 max-lg:relative max-lg:mt-6 max-lg:max-w-full bg-sage-dark text-warm-white p-8 px-9 max-w-[340px]">
          <p className="font-heading text-[22px] italic font-light leading-[1.5] mb-4">
            &ldquo;Every woman, across every generation, deserves access to the
            most current, personalized, evidence-based care available.&rdquo;
          </p>
          <span className="text-[11px] tracking-[0.12em] uppercase text-warm-white/60">
            &mdash; Dr. Teressa Alexander, MD
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
