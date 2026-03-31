import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-[120px] px-[60px] max-w-[1400px] mx-auto grid grid-cols-[5fr_7fr] gap-[100px] items-center max-lg:grid-cols-1 max-lg:px-8 max-lg:py-20"
    >
      {/* Portrait */}
      <ScrollReveal>
        <div className="w-full aspect-[3/4] overflow-hidden relative">
          <Image
            src="/images/dr-alexander-portrait.jpg"
            alt="Dr. Teressa Alexander, MD — Board-Certified Obstetrician and Gynecologist"
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute bottom-0 right-0 bg-gold py-5 px-7 translate-x-5">
            <span className="font-heading text-[20px] text-warm-white italic">
              Dr. Alexander
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5 mt-7">
          {[
            "Board Certified OB/GYN",
            "24+ Years Experience",
            "Integrative Medicine",
            "Menopause Specialist",
          ].map((pill) => (
            <span
              key={pill}
              className="text-[11px] tracking-[0.1em] uppercase py-2 px-4 border border-border text-text-muted bg-warm-white"
            >
              {pill}
            </span>
          ))}
        </div>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal delay={2}>
        <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
          About Dr. Alexander
        </span>
        <blockquote className="font-heading text-[clamp(26px,2.8vw,40px)] italic font-light text-charcoal leading-[1.4] mb-10 pl-7 border-l-2 border-gold">
          &ldquo;The best care happens when women feel truly heard, respected,
          and equipped to lead their healthiest lives.&rdquo;
        </blockquote>
        <p className="text-[16px] text-text-muted leading-[1.9] mb-5">
          Dr. Teressa (Terri) Alexander is a board-certified obstetrician and
          gynecologist with more than two decades of dedicated practice
          championing women&rsquo;s health at every stage of life.
        </p>
        <p className="text-[16px] text-text-muted leading-[1.9] mb-5">
          Her approach combines rigorous evidence-based medicine with genuine
          warmth &mdash; she is known for her exceptional bedside manner, her
          willingness to truly listen, and her proactive, thorough approach to
          care.
        </p>
        <p className="text-[16px] text-text-muted leading-[1.9] mb-5">
          HerCare Gynecology is the culmination of Dr. Alexander&rsquo;s vision:
          a practice built entirely around women &mdash; their hormones, their
          whole health, and every season of their lives.
        </p>
        <ul className="list-none mt-10">
          {[
            "Board-Certified Obstetrician & Gynecologist",
            "Over 24 years of clinical experience",
            "Specialization in perimenopause, menopause & hormonal health",
            "Integrative & whole-person wellness approach",
            "Serving the greater Chicago area \u2014 Naperville & surrounding communities",
          ].map((item) => (
            <li
              key={item}
              className="py-4 border-b border-border text-[14px] text-text-muted flex gap-4 items-start"
            >
              <span className="text-sage shrink-0 mt-px">&mdash;</span>
              {item}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  );
}
