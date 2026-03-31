import ScrollReveal from "@/components/animations/ScrollReveal";
import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-charcoal py-[120px] px-[60px] overflow-hidden max-lg:px-8 max-lg:py-20"
    >
      <ScrollReveal className="text-center mb-[72px]">
        <span className="text-[11px] tracking-[0.22em] uppercase text-gold font-medium mb-6 block">
          Patient Stories
        </span>
        <h2 className="font-heading text-[clamp(36px,3.5vw,54px)] font-light leading-[1.12] text-warm-white">
          What our patients{" "}
          <em className="italic text-sage-light">say</em>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-6 max-w-[1280px] mx-auto max-lg:grid-cols-1 max-lg:max-w-[600px]">
        {testimonials.map((review, i) => (
          <ScrollReveal key={i} delay={(i * 2) as 0 | 2 | 4}>
            <div className="bg-warm-white/4 border border-warm-white/8 p-10 px-9 transition-all duration-300 relative hover:bg-warm-white/7 hover:border-gold/30 hover:-translate-y-1">
              <div className="flex gap-1 mb-6 text-gold text-[14px]">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <span key={j}>&#9733;</span>
                ))}
              </div>
              <p className="font-heading text-[19px] italic font-light text-warm-white/88 leading-[1.65] mb-7">
                &ldquo;{review.text}&rdquo;
              </p>
              <span className="text-[11px] tracking-[0.12em] uppercase text-warm-white/35">
                {review.author}
              </span>
              <span className="absolute top-6 right-7 font-heading text-[80px] leading-none text-gold/12 italic">
                &ldquo;
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
