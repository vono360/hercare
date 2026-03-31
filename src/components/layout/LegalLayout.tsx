import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="pt-[160px] pb-20 px-[60px] max-lg:px-8 max-lg:pt-[130px]">
          <div className="max-w-[680px] mx-auto">
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
                  <li className="text-sage-dark">{title}</li>
                </ol>
              </nav>
              <h1 className="font-heading text-[clamp(36px,4vw,56px)] font-light leading-[1.12] text-charcoal mb-4">
                {title}
              </h1>
              <p className="text-[13px] text-text-muted">
                Last updated: {lastUpdated}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-[120px] px-[60px] max-lg:px-8 max-lg:pb-20">
          <article className="max-w-[680px] mx-auto legal-content">
            {children}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal>
      <div className="mb-10">
        <h2 className="font-heading text-[24px] font-normal text-charcoal mb-4 leading-[1.3]">
          {heading}
        </h2>
        <div className="text-[15px] text-text-muted leading-[1.9] space-y-4">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
}
