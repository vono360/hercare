const items = [
  "Perimenopause & Menopause Care",
  "Hormone Therapy",
  "Preventive Health",
  "Sexual Wellness",
  "Whole-Person Care",
  "Evidence-Based Medicine",
  "Cardiovascular Health",
  "Longevity & Vitality",
];

export default function Marquee() {
  return (
    <div className="bg-sage-dark py-[18px] overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[11px] tracking-[0.18em] uppercase text-warm-white/75 px-12 font-normal"
          >
            {item}{" "}
            <span className="text-gold text-[16px] align-middle">
              &middot;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
