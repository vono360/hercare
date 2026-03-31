import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Request an appointment with Dr. Terri Alexander at HerCare Gynecology in Naperville, IL. Opening Spring 2026 \u2014 now accepting new patient requests.",
};

const contactItems = [
  {
    label: "Location",
    value: CONTACT.location,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: CONTACT.phone,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: CONTACT.hours,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const drchronoUrl = process.env.NEXT_PUBLIC_DRCHRONO_URL;

  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-[160px] pb-16 px-[60px] max-lg:px-8 max-lg:pt-[130px]">
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
                  <li className="text-sage-dark">Contact</li>
                </ol>
              </nav>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Get In Touch
              </span>
              <h1 className="font-heading text-[clamp(42px,4.5vw,68px)] font-light leading-[1.08] text-charcoal mb-8 max-w-[700px]">
                Begin your{" "}
                <em className="italic text-sage-dark">care journey</em>
              </h1>
              <p className="text-[18px] text-text-muted leading-[1.8] max-w-[680px]">
                We are currently accepting new patients for our Spring 2026
                opening in Naperville, IL. Submit a request and we&rsquo;ll be
                in touch to confirm your appointment as scheduling opens.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Opening Banner */}
        <section className="px-[60px] pb-16 max-lg:px-8">
          <div className="max-w-[1400px] mx-auto">
            <ScrollReveal>
              <div className="bg-sage-dark py-6 px-8 flex items-center gap-4 max-sm:flex-col max-sm:text-center max-sm:gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse-dot max-sm:mx-auto" />
                <span className="text-[15px] text-warm-white/90 tracking-[0.04em]">
                  <strong className="text-gold-light font-medium">
                    Opening Spring 2026
                  </strong>{" "}
                  &mdash; Now accepting appointment requests for new patients
                </span>
                {drchronoUrl && (
                  <a
                    href={drchronoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[12px] tracking-[0.14em] uppercase font-medium py-2.5 px-6 border border-warm-white/30 text-warm-white no-underline transition-all duration-300 hover:bg-warm-white hover:text-sage-dark max-sm:ml-0"
                  >
                    Book Online
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="pb-[120px] px-[60px] max-lg:px-8 max-lg:pb-20">
          <div className="max-w-[1400px] mx-auto grid grid-cols-[5fr_7fr] gap-20 items-start max-lg:grid-cols-1">
            {/* Contact Details */}
            <ScrollReveal>
              <h2 className="font-heading text-[clamp(28px,3vw,38px)] font-light text-charcoal mb-10 leading-[1.2]">
                Contact{" "}
                <em className="italic text-sage-dark">information</em>
              </h2>

              <div className="flex flex-col gap-8">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex gap-5 items-start">
                    <div className="w-12 h-12 border border-border flex items-center justify-center shrink-0 text-sage-dark">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.14em] uppercase text-text-muted mb-1.5">
                        {item.label}
                      </div>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          className="text-[16px] text-charcoal font-normal no-underline hover:text-sage-dark transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[16px] text-charcoal font-normal">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <div className="mt-14 pt-10 border-t border-border">
                <h3 className="font-heading text-[22px] font-normal text-charcoal mb-6">
                  What happens next?
                </h3>
                <div className="flex flex-col gap-5">
                  {[
                    {
                      step: "1",
                      text: "Submit your appointment request using the form. Include any details about your health concerns.",
                    },
                    {
                      step: "2",
                      text: "Our team will review your request and reach out within 1\u20132 business days to confirm your visit.",
                    },
                    {
                      step: "3",
                      text: "Once scheduling opens for our Spring 2026 launch, we\u2019ll finalize your appointment date and time.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="font-heading text-[20px] font-light text-gold leading-none shrink-0 w-6 pt-0.5">
                        {item.step}
                      </div>
                      <p className="text-[14px] text-text-muted leading-[1.7]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* DrChrono booking button */}
              {drchronoUrl && (
                <div className="mt-10">
                  <p className="text-[13px] text-text-muted mb-4">
                    Prefer to book online? Use our patient portal:
                  </p>
                  <a
                    href={drchronoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-4 px-8 bg-charcoal text-warm-white no-underline text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:bg-sage-dark hover:-translate-y-px"
                  >
                    Book via Patient Portal &rarr;
                  </a>
                </div>
              )}
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={2}>
              <AppointmentForm />
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
