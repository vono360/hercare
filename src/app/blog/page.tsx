import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { blogPosts, formatDate } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Women\u2019s health insights from Dr. Terri Alexander, Board-Certified OB/GYN in Naperville, IL. Expert articles on menopause, hormonal health, preventive care, and more.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
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
                  <li className="text-sage-dark">Blog</li>
                </ol>
              </nav>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                Health Insights
              </span>
              <h1 className="font-heading text-[clamp(42px,4.5vw,68px)] font-light leading-[1.08] text-charcoal mb-8">
                Women&rsquo;s health,{" "}
                <em className="italic text-sage-dark">explained</em>
              </h1>
              <p className="text-[18px] text-text-muted leading-[1.8] max-w-[680px]">
                Evidence-based insights on menopause, hormonal health,
                preventive care, and whole-person wellness &mdash; written by
                Dr. Terri Alexander for the women she serves.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Posts */}
        <section className="pb-[120px] px-[60px] max-lg:px-8 max-lg:pb-20">
          <div className="max-w-[900px] mx-auto flex flex-col gap-0">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={Math.min(i, 2) as 0 | 1 | 2}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block py-10 border-b border-border no-underline group transition-colors hover:bg-warm-white -mx-8 px-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[11px] tracking-[0.12em] uppercase text-gold font-medium">
                      {post.category}
                    </span>
                    <span className="text-border">&middot;</span>
                    <time className="text-[12px] text-text-muted">
                      {formatDate(post.date)}
                    </time>
                    <span className="text-border">&middot;</span>
                    <span className="text-[12px] text-text-muted">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-[clamp(24px,2.5vw,32px)] font-normal text-charcoal leading-[1.3] mb-4 group-hover:text-sage-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[15px] text-text-muted leading-[1.8] mb-4 max-w-[680px]">
                    {post.excerpt}
                  </p>
                  <span className="text-[12px] text-sage-dark tracking-[0.08em] uppercase font-medium flex items-center gap-2 transition-all duration-300 group-hover:gap-3.5 after:content-['→'] after:text-[14px]">
                    Read article
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
