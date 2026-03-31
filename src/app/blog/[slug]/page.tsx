import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/animations/ScrollReveal";
import JsonLd from "@/components/seo/JsonLd";
import { blogPosts, getBlogPostBySlug, formatDate } from "@/lib/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Dr. Teressa Alexander, MD",
      jobTitle: "Board-Certified OB/GYN",
    },
    publisher: {
      "@type": "Organization",
      name: "HerCare Gynecology",
    },
    description: post.excerpt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hercaregynecology.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <Navbar />
      <main id="main-content">
        {/* Header */}
        <section className="pt-[160px] pb-12 px-[60px] max-lg:px-8 max-lg:pt-[130px]">
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
                  <li>
                    <Link
                      href="/blog"
                      className="no-underline text-text-muted hover:text-sage-dark transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="text-border">/</li>
                  <li className="text-sage-dark truncate max-w-[200px]">
                    {post.title}
                  </li>
                </ol>
              </nav>

              <div className="flex items-center gap-4 mb-6">
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

              <h1 className="font-heading text-[clamp(36px,4vw,56px)] font-light leading-[1.12] text-charcoal mb-8">
                {post.title}
              </h1>

              <p className="text-[18px] text-text-muted leading-[1.8] mb-8">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 py-6 border-t border-b border-border">
                <div className="w-12 h-12 rounded-full bg-sage-light/30 flex items-center justify-center">
                  <span className="font-heading text-[18px] text-sage-dark">
                    TA
                  </span>
                </div>
                <div>
                  <div className="text-[14px] text-charcoal font-medium">
                    {post.author}
                  </div>
                  <div className="text-[12px] text-text-muted">
                    Board-Certified OB/GYN &middot; HerCare Gynecology
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 px-[60px] max-lg:px-8">
          <article className="max-w-[680px] mx-auto">
            {/* Intro paragraphs */}
            {post.content.map((para, i) => (
              <ScrollReveal key={`intro-${i}`}>
                <p className="text-[17px] text-text-muted leading-[1.9] mb-6">
                  {para}
                </p>
              </ScrollReveal>
            ))}

            {/* Sections */}
            {post.sections.map((section, i) => (
              <ScrollReveal key={i}>
                <h2 className="font-heading text-[clamp(24px,2.5vw,34px)] font-light text-charcoal mt-14 mb-6 leading-[1.2]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-[17px] text-text-muted leading-[1.9] mb-6"
                  >
                    {para}
                  </p>
                ))}
              </ScrollReveal>
            ))}
          </article>
        </section>

        {/* Tags */}
        <section className="pb-12 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto">
            <ScrollReveal>
              <div className="flex flex-wrap gap-2.5 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-[0.1em] uppercase py-2 px-4 border border-border text-text-muted bg-warm-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* More Posts */}
        <section className="py-20 px-[60px] bg-warm-white max-lg:px-8">
          <div className="max-w-[900px] mx-auto">
            <ScrollReveal>
              <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
                More Articles
              </span>
              <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-charcoal mb-10 leading-[1.2]">
                Continue reading
              </h2>
            </ScrollReveal>
            <div className="flex flex-col gap-0">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p, i) => (
                  <ScrollReveal key={p.slug} delay={(i + 1) as 1 | 2 | 3}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="block py-8 border-b border-border no-underline group"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[11px] tracking-[0.12em] uppercase text-gold font-medium">
                          {p.category}
                        </span>
                        <span className="text-border">&middot;</span>
                        <time className="text-[12px] text-text-muted">
                          {formatDate(p.date)}
                        </time>
                      </div>
                      <h3 className="font-heading text-[22px] font-normal text-charcoal leading-[1.3] group-hover:text-sage-dark transition-colors">
                        {p.title}
                      </h3>
                    </Link>
                  </ScrollReveal>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-sage-dark py-20 px-[60px] max-lg:px-8">
          <div className="max-w-[680px] mx-auto text-center">
            <h2 className="font-heading text-[clamp(28px,3vw,40px)] font-light text-warm-white leading-[1.2] mb-6">
              Have questions about{" "}
              <em className="italic text-gold-light">your health</em>?
            </h2>
            <p className="text-[16px] text-warm-white/70 leading-[1.8] mb-10">
              Dr. Alexander is currently accepting new patients for HerCare
              Gynecology&rsquo;s Spring 2026 opening in Naperville, IL.
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
