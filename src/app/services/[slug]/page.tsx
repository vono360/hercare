import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import { serviceContent } from "@/lib/service-content";
import { CONTACT } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = serviceContent[slug];
  if (!content) return {};

  return {
    title: content.title,
    description: content.metaDescription,
    openGraph: {
      title: `${content.title} | HerCare Gynecology`,
      description: content.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const content = serviceContent[slug];

  if (!service || !content) notFound();

  const related = getRelatedServices(service);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-[160px] pb-16 px-[60px] max-lg:px-8 max-lg:pt-[130px]">
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
                  <li>
                    <Link
                      href="/services"
                      className="no-underline text-text-muted hover:text-sage-dark transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="text-border">/</li>
                  <li className="text-sage-dark">{service.name}</li>
                </ol>
              </nav>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                {service.num} &mdash; Services
              </span>
              <h1 className="font-heading text-[clamp(40px,4.5vw,64px)] font-light leading-[1.1] text-charcoal mb-8">
                {service.name}
              </h1>
              <p className="text-[18px] text-text-muted leading-[1.8] max-w-[680px]">
                {service.shortDesc}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Overview */}
        <section className="pb-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal mb-8 leading-[1.2]">
                Understanding{" "}
                <em className="italic text-sage-dark">your health</em>
              </h2>
              {content.overview.map((para, i) => (
                <p
                  key={i}
                  className="text-[16px] text-text-muted leading-[1.9] mb-5"
                >
                  {para}
                </p>
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 px-[60px] bg-warm-white max-lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Our Approach
              </span>
              <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal mb-10 leading-[1.2]">
                How Dr. Alexander approaches{" "}
                <em className="italic text-sage-dark">your care</em>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              {content.approach.map((item, i) => (
                <ScrollReveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                  <div className="p-7 bg-cream border border-border">
                    <div className="font-heading text-[13px] text-gold tracking-[0.08em] mb-3">
                      0{i + 1}
                    </div>
                    <p className="text-[14px] text-text-muted leading-[1.8]">
                      {item}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Your Visit
              </span>
              <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal mb-10 leading-[1.2]">
                What to <em className="italic text-sage-dark">expect</em>
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-0">
              {content.expectations.map((step, i) => (
                <ScrollReveal key={i} delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}>
                  <div className="flex gap-6 py-6 border-b border-border">
                    <div className="font-heading text-[28px] font-light text-gold leading-none shrink-0 w-8">
                      {i + 1}
                    </div>
                    <p className="text-[15px] text-text-muted leading-[1.8]">
                      {step}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* When to Seek Care */}
        <section className="py-20 px-[60px] bg-charcoal max-lg:px-8">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Signs to Watch For
              </span>
              <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-warm-white mb-10 leading-[1.2]">
                When to{" "}
                <em className="italic text-sage-light">seek care</em>
              </h2>
              <ul className="list-none flex flex-col gap-4">
                {content.signs.map((sign, i) => (
                  <li
                    key={i}
                    className="flex gap-4 items-start text-[15px] text-warm-white/80 leading-[1.7]"
                  >
                    <span className="text-gold shrink-0 mt-px">&mdash;</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Common Questions
              </span>
              <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal mb-10 leading-[1.2]">
                Frequently asked{" "}
                <em className="italic text-sage-dark">questions</em>
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-0">
              {content.faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={Math.min(i, 4) as 0 | 1 | 2 | 3 | 4}>
                  <div className="py-8 border-b border-border">
                    <h3 className="font-heading text-[20px] font-normal text-charcoal mb-3 leading-[1.3]">
                      {faq.question}
                    </h3>
                    <p className="text-[15px] text-text-muted leading-[1.8]">
                      {faq.answer}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        {related.length > 0 && (
          <section className="py-20 px-[60px] bg-warm-white max-lg:px-8">
            <div className="max-w-[1280px] mx-auto">
              <ScrollReveal>
                <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                  Related Care
                </span>
                <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal mb-10 leading-[1.2]">
                  You may also be interested in
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {related.map((rel, i) => (
                  <ScrollReveal key={rel.slug} delay={(i + 1) as 1 | 2 | 3}>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="block p-8 bg-cream border border-border no-underline transition-all duration-300 hover:border-sage-light hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(92,114,96,0.08)] group"
                    >
                      <span className="font-heading text-[13px] text-gold tracking-[0.08em] mb-3 block">
                        {rel.num}
                      </span>
                      <div className="font-heading text-[20px] font-normal text-charcoal mb-2 leading-[1.3]">
                        {rel.name}
                      </div>
                      <p className="text-[13px] text-text-muted leading-[1.7] mb-4">
                        {rel.shortDesc}
                      </p>
                      <span className="text-[12px] text-sage-dark tracking-[0.08em] uppercase font-medium flex items-center gap-2 transition-all duration-300 group-hover:gap-3.5 after:content-['→'] after:text-[14px]">
                        Learn more
                      </span>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="bg-sage-dark py-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(30px,3vw,44px)] font-light text-warm-white leading-[1.2] mb-6">
              Ready to take the{" "}
              <em className="italic text-gold-light">next step</em>?
            </h2>
            <p className="text-[16px] text-warm-white/70 leading-[1.8] mb-4">
              Dr. Alexander is currently accepting new patients for her Spring
              2026 opening in Naperville, IL.
            </p>
            <p className="text-[13px] text-warm-white/50 mb-10">
              {CONTACT.email} &middot; {CONTACT.phone}
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
