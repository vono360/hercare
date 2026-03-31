import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Patient Stories",
  description:
    "Read what patients say about Dr. Terri Alexander at HerCare Gynecology in Naperville, IL. 5-star reviews highlighting compassionate, thorough women's health care.",
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "HerCare Gynecology",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: String(testimonials.length),
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(t.rating),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: t.author,
    },
    reviewBody: t.text,
  })),
};

export default function PatientStoriesPage() {
  return (
    <>
      <JsonLd data={reviewSchema} />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-[160px] pb-20 px-[60px] max-lg:px-8 max-lg:pt-[130px]">
          <div className="max-w-[900px] mx-auto">
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
                  <li className="text-sage-dark">Patient Stories</li>
                </ol>
              </nav>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Patient Stories
              </span>
              <h1 className="font-heading text-[clamp(42px,4.5vw,68px)] font-light leading-[1.08] text-charcoal mb-8">
                What our patients{" "}
                <em className="italic text-sage-dark">say</em>
              </h1>
              <p className="text-[18px] text-text-muted leading-[1.8] max-w-[680px]">
                The most meaningful measure of a physician is the trust of
                her patients. Here&rsquo;s what women have shared about their
                experience with Dr. Alexander.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Reviews */}
        <section className="pb-[120px] px-[60px] max-lg:px-8 max-lg:pb-20">
          <div className="max-w-[900px] mx-auto flex flex-col gap-10">
            {testimonials.map((review, i) => (
              <ScrollReveal key={i} delay={Math.min(i, 2) as 0 | 1 | 2}>
                <div className="bg-warm-white border border-border p-12 px-14 relative max-sm:p-8 max-sm:px-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 text-gold text-[18px]">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <span key={j}>&#9733;</span>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-heading text-[clamp(22px,2.5vw,30px)] italic font-light text-charcoal leading-[1.5] mb-8">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-[1px] bg-gold" />
                    <span className="text-[12px] tracking-[0.14em] uppercase text-text-muted font-medium">
                      {review.author}
                    </span>
                  </div>

                  {/* Decorative quote */}
                  <span className="absolute top-8 right-10 font-heading text-[120px] leading-none text-gold/8 italic max-sm:text-[80px] max-sm:right-6">
                    &ldquo;
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Aggregate Rating */}
        <section className="py-20 px-[60px] bg-charcoal max-lg:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <ScrollReveal>
              <div className="flex justify-center gap-2 mb-6 text-gold text-[28px]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j}>&#9733;</span>
                ))}
              </div>
              <div className="font-heading text-[64px] font-light text-warm-white leading-none mb-3">
                5.0
              </div>
              <p className="text-[13px] tracking-[0.12em] uppercase text-warm-white/40 mb-8">
                Average Patient Rating
              </p>
              <p className="text-[16px] text-warm-white/60 leading-[1.8] max-w-[500px] mx-auto">
                Dr. Alexander&rsquo;s patients consistently highlight her
                genuine compassion, exceptional knowledge, and the time she
                dedicates to each person&rsquo;s care.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Share Your Story */}
        <section className="py-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Your Experience Matters
              </span>
              <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal leading-[1.2] mb-6">
                Experience the{" "}
                <em className="italic text-sage-dark">HerCare difference</em>
              </h2>
              <p className="text-[16px] text-text-muted leading-[1.8] mb-10">
                We believe every woman deserves a healthcare experience that
                leaves her feeling heard, respected, and cared for. If
                you&rsquo;re looking for a gynecologist who takes the time to
                truly understand your needs, we invite you to request an
                appointment.
              </p>
              <Link
                href="/contact"
                className="inline-block py-4 px-10 bg-sage-dark text-warm-white no-underline text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-charcoal hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(42,42,42,0.15)]"
              >
                Request an Appointment
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
