import ScrollReveal from "@/components/animations/ScrollReveal";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { CONTACT } from "@/lib/constants";

const contactItems = [
  {
    label: "Location",
    value: CONTACT.location,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: CONTACT.phone,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: CONTACT.email,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Hours",
    value: CONTACT.hours,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-[120px] px-[60px] max-w-[1400px] mx-auto grid grid-cols-2 gap-20 items-start max-lg:grid-cols-1 max-lg:px-8 max-lg:py-20"
    >
      {/* Info */}
      <ScrollReveal>
        <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
          Get In Touch
        </span>
        <h2 className="font-heading text-[clamp(36px,3.5vw,54px)] font-light leading-[1.12] text-charcoal mb-8">
          Begin your <em className="italic text-sage-dark">care journey</em>
        </h2>
        <p className="text-[16px] text-text-muted leading-[1.9] mb-5">
          We are currently accepting new patients for our Spring 2026 opening.
          Submit a request and we&rsquo;ll be in touch to confirm your
          appointment as scheduling opens.
        </p>

        <div className="bg-sage-dark py-5 px-7 flex items-center gap-4 mt-10">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse-dot" />
          <span className="text-[13px] text-warm-white/90 tracking-[0.06em]">
            <strong className="text-gold-light font-medium">
              Opening Spring 2026
            </strong>{" "}
            &mdash; Now accepting appointment requests
          </span>
        </div>

        <div className="mt-12 flex flex-col gap-7">
          {contactItems.map((item) => (
            <div key={item.label} className="flex gap-5 items-start">
              <div className="w-11 h-11 border border-border flex items-center justify-center shrink-0 text-sage-dark">
                {item.icon}
              </div>
              <div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-text-muted mb-1">
                  {item.label}
                </div>
                <div className="text-[15px] text-charcoal font-normal">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Form */}
      <ScrollReveal delay={2}>
        <AppointmentForm />
      </ScrollReveal>
    </section>
  );
}
