import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-[200px] px-[60px] max-lg:px-8 max-lg:py-[140px]">
        <div className="text-center max-w-[500px]">
          <div className="font-heading text-[120px] font-light text-border leading-none mb-4">
            404
          </div>
          <h1 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal mb-4 leading-[1.2]">
            Page not found
          </h1>
          <p className="text-[16px] text-text-muted leading-[1.8] mb-10">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been
            moved. Let us help you find what you need.
          </p>
          <div className="flex gap-5 justify-center items-center flex-wrap">
            <Link
              href="/"
              className="inline-block py-4 px-10 bg-sage-dark text-warm-white no-underline text-[12px] tracking-[0.15em] uppercase font-medium transition-all duration-350 hover:bg-charcoal hover:-translate-y-px"
            >
              Go Home
            </Link>
            <Link
              href="/services"
              className="text-[13px] text-text-muted no-underline tracking-[0.06em] flex items-center gap-2.5 transition-all duration-300 hover:text-sage-dark hover:gap-3.5 after:content-['→'] after:text-[16px]"
            >
              View services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
