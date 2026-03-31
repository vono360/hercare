import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "About Dr. Terri Alexander",
  description:
    "Meet Dr. Teressa (Terri) Alexander, MD — board-certified OB/GYN with 24+ years of experience specializing in menopause, hormonal health, and whole-person women's wellness in Naperville, IL.",
};

const credentials = [
  "Board-Certified Obstetrician & Gynecologist",
  "Doctor of Medicine (MD)",
  "Over 24 years of clinical practice",
  "Specialization in perimenopause, menopause & hormonal health",
  "Integrative & whole-person wellness approach",
  "Serving the greater Chicago area — Naperville & surrounding communities",
];

const philosophyValues = [
  {
    title: "Evidence-Based",
    desc: "Every recommendation Dr. Alexander makes is grounded in the latest peer-reviewed research and clinical guidelines from leading medical organizations. She stays current so you can trust that your care reflects the best available science.",
  },
  {
    title: "Unhurried",
    desc: "At HerCare, appointments are designed to give you time — time to share your full story, ask questions, and feel genuinely heard. Dr. Alexander believes that meaningful care cannot be rushed.",
  },
  {
    title: "Patient Partnership",
    desc: "You are an active participant in every care decision. Dr. Alexander presents options, explains trade-offs, and respects your preferences — because your body, your values, and your goals matter.",
  },
  {
    title: "Whole-Person",
    desc: "Dr. Alexander connects the dots between hormonal, cardiovascular, metabolic, mental, and sexual health. She treats you as a complete person — not a collection of isolated symptoms.",
  },
];

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Teressa Alexander",
  alternateName: "Dr. Terri Alexander",
  medicalSpecialty: "Obstetrics and Gynecology",
  description:
    "Board-certified OB/GYN with over 24 years of experience specializing in perimenopause, menopause, and hormonal health.",
  qualifications: "MD, Board-Certified OB/GYN",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naperville",
    addressRegion: "IL",
    addressCountry: "US",
  },
  availableService: services.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.name,
  })),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={physicianSchema} />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-[160px] pb-20 px-[60px] max-lg:px-8 max-lg:pt-[130px]">
          <div className="max-w-[1400px] mx-auto">
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
                  <li className="text-sage-dark">About</li>
                </ol>
              </nav>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                About Dr. Alexander
              </span>
              <h1 className="font-heading text-[clamp(42px,4.5vw,68px)] font-light leading-[1.08] text-charcoal mb-8 max-w-[800px]">
                A physician who{" "}
                <em className="italic text-sage-dark">truly listens</em>
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Portrait + Bio */}
        <section className="pb-[120px] px-[60px] max-lg:px-8 max-lg:pb-20">
          <div className="max-w-[1400px] mx-auto grid grid-cols-[5fr_7fr] gap-[100px] items-start max-lg:grid-cols-1 max-lg:gap-16">
            {/* Portrait */}
            <ScrollReveal>
              <div className="w-full aspect-[3/4] overflow-hidden relative">
                <Image
                  src="/images/dr-alexander-portrait.jpg"
                  alt="Dr. Teressa Alexander, MD — Board-Certified Obstetrician and Gynecologist in Naperville, IL"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
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

            {/* Bio */}
            <ScrollReveal delay={2}>
              <blockquote className="font-heading text-[clamp(26px,2.8vw,40px)] italic font-light text-charcoal leading-[1.4] mb-10 pl-7 border-l-2 border-gold">
                &ldquo;The best care happens when women feel truly heard,
                respected, and equipped to lead their healthiest lives.&rdquo;
              </blockquote>

              <p className="text-[18px] text-text-muted leading-[1.8] mb-6 max-w-[680px]">
                Dr. Teressa (Terri) Alexander is a board-certified obstetrician
                and gynecologist with more than two decades of dedicated practice
                championing women&rsquo;s health at every stage of life.
              </p>

              <p className="text-[16px] text-text-muted leading-[1.9] mb-5 max-w-[680px]">
                Throughout her career, Dr. Alexander has been recognized for
                her exceptional clinical skill, her genuine compassion, and
                her unwavering commitment to her patients. She brings the
                kind of thorough, proactive approach to care that builds
                lasting trust — listening carefully, explaining clearly, and
                ensuring that every patient leaves feeling informed and
                empowered.
              </p>

              <p className="text-[16px] text-text-muted leading-[1.9] mb-5 max-w-[680px]">
                Her approach combines rigorous evidence-based medicine with
                genuine warmth — she is known for her exceptional bedside
                manner, her willingness to truly listen, and her proactive,
                thorough approach to care. Patients consistently describe her
                as &ldquo;phenomenal,&rdquo; &ldquo;humble,&rdquo; and
                &ldquo;the absolute best.&rdquo;
              </p>

              <p className="text-[16px] text-text-muted leading-[1.9] mb-5 max-w-[680px]">
                Dr. Alexander has developed particular expertise in
                perimenopause, menopause, and hormonal health — areas where
                many women feel underserved by traditional healthcare. She
                understands the profound impact that hormonal transitions can
                have on a woman&rsquo;s physical health, emotional well-being,
                relationships, and sense of self.
              </p>

              <p className="text-[16px] text-text-muted leading-[1.9] mb-8 max-w-[680px]">
                HerCare Gynecology is the culmination of Dr. Alexander&rsquo;s
                vision: a practice built entirely around women — their
                hormones, their whole health, and every season of their lives.
                In Naperville, she is creating a space where exceptional
                medicine meets genuine human connection.
              </p>

              <ul className="list-none mt-10">
                {credentials.map((item) => (
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
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-[120px] px-[60px] bg-warm-white max-lg:px-8 max-lg:py-20">
          <div className="max-w-[1100px] mx-auto">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Our Philosophy
              </span>
              <h2 className="font-heading text-[clamp(32px,3.5vw,50px)] font-light leading-[1.12] text-charcoal mb-6">
                What guides{" "}
                <em className="italic text-sage-dark">our care</em>
              </h2>
              <p className="text-[16px] text-text-muted leading-[1.9] mb-14 max-w-[680px]">
                Every decision at HerCare Gynecology is guided by four core
                principles. These aren&rsquo;t just words on a wall — they
                shape every appointment, every conversation, and every care
                plan.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 gap-8 max-sm:grid-cols-1">
              {philosophyValues.map((value, i) => (
                <ScrollReveal
                  key={value.title}
                  delay={(i + 1) as 1 | 2 | 3 | 4}
                >
                  <div className="p-9 bg-cream border border-border h-full">
                    <div className="font-heading text-[13px] text-gold tracking-[0.08em] mb-4">
                      0{i + 1}
                    </div>
                    <h3 className="font-heading text-[24px] font-normal text-charcoal mb-4">
                      {value.title}
                    </h3>
                    <p className="text-[15px] text-text-muted leading-[1.8]">
                      {value.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-[120px] px-[60px] max-lg:px-8 max-lg:py-20">
          <div className="max-w-[900px] mx-auto">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Areas of Expertise
              </span>
              <h2 className="font-heading text-[clamp(32px,3.5vw,50px)] font-light leading-[1.12] text-charcoal mb-6">
                Comprehensive care across{" "}
                <em className="italic text-sage-dark">12 specialties</em>
              </h2>
              <p className="text-[16px] text-text-muted leading-[1.9] mb-14 max-w-[680px]">
                Dr. Alexander offers expert, evidence-based care across a
                full spectrum of women&rsquo;s health needs.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
              {services.map((service, i) => (
                <ScrollReveal key={service.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-4 py-4 px-5 no-underline border-b border-border transition-all duration-300 hover:bg-warm-white group"
                  >
                    <span className="font-heading text-[13px] text-gold tracking-[0.08em] shrink-0">
                      {service.num}
                    </span>
                    <span className="text-[15px] text-charcoal group-hover:text-sage-dark transition-colors">
                      {service.name}
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="mt-12">
                <Link
                  href="/services"
                  className="text-[13px] text-sage-dark no-underline tracking-[0.06em] flex items-center gap-2.5 transition-all duration-300 hover:gap-3.5 after:content-['→'] after:text-[16px] font-medium"
                >
                  View all services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-sage-dark py-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(30px,3vw,44px)] font-light text-warm-white leading-[1.2] mb-6">
              Ready to meet{" "}
              <em className="italic text-gold-light">Dr. Alexander</em>?
            </h2>
            <p className="text-[16px] text-warm-white/70 leading-[1.8] mb-10">
              HerCare Gynecology is opening in Spring 2026 in Naperville, IL.
              Dr. Alexander is currently accepting appointment requests for
              new patients.
            </p>
            <Link
              href="/contact"
              className="inline-block py-4 px-10 bg-warm-white text-sage-dark no-underline text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-gold hover:text-warm-white hover:-translate-y-px"
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
