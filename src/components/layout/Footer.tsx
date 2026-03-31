import Link from "next/link";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="bg-charcoal-soft py-16 px-[60px] pb-10 max-lg:px-8 max-lg:pt-12 max-lg:pb-8">
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-[60px] pb-12 border-b border-warm-white/8 max-lg:grid-cols-1 max-lg:gap-8">
        {/* Brand column */}
        <div>
          <span className="font-heading text-2xl font-normal text-warm-white mb-4 block">
            HerCare <span className="text-sage-light italic">Gynecology</span>
          </span>
          <p className="text-[13px] text-warm-white/45 leading-[1.8] max-w-[280px] mb-7">
            A new kind of women&rsquo;s health practice built around you, your
            hormones, your whole health, and every stage of life.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <span className="text-[11px] tracking-[0.1em] uppercase py-2 px-4 border border-warm-white/10 text-warm-white/45 bg-warm-white/5">
              Board Certified OB/GYN
            </span>
            <span className="text-[11px] tracking-[0.1em] uppercase py-2 px-4 border border-warm-white/10 text-warm-white/45 bg-warm-white/5">
              Opening Spring 2026
            </span>
          </div>
        </div>

        {/* Navigation column */}
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-warm-white/40 mb-5">
            Navigation
          </p>
          <ul className="list-none flex flex-col gap-3">
            <li>
              <Link
                href="/#philosophy"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Our Approach
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Dr. Alexander
              </Link>
            </li>
            <li>
              <Link
                href="/patient-stories"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Patient Stories
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/legal/privacy-policy"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/legal/terms-of-use"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <Link
                href="/legal/hipaa-notice"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                HIPAA Notice
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

        {/* Services column */}
        <div>
          <p className="text-[11px] tracking-[0.18em] uppercase text-warm-white/40 mb-5">
            Services
          </p>
          <ul className="list-none flex flex-col gap-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="no-underline text-[14px] text-warm-white/65 transition-colors duration-300 hover:text-sage-light"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 text-[12px] text-warm-white/30 max-lg:flex-col max-lg:gap-2">
        <span>
          &copy; 2026 HerCare Gynecology &middot; Dr. Teressa Alexander, MD
        </span>
        <span>Personalized &middot; Whole-Person &middot; Evidence-Based</span>
      </div>
    </footer>
  );
}
