/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: withOpacity("250 247 242"),
        "warm-white": withOpacity("253 252 249"),
        sage: {
          DEFAULT: withOpacity("138 158 139"),
          light: withOpacity("194 207 191"),
          dark: withOpacity("92 114 96"),
        },
        charcoal: {
          DEFAULT: withOpacity("42 42 42"),
          soft: withOpacity("61 61 61"),
        },
        taupe: {
          DEFAULT: withOpacity("184 168 152"),
          light: withOpacity("232 224 216"),
        },
        gold: {
          DEFAULT: withOpacity("196 169 98"),
          light: withOpacity("232 217 176"),
        },
        "text-primary": withOpacity("42 42 42"),
        "text-muted": withOpacity("101 91 81"),
        border: "rgba(184, 168, 152, 0.3)",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      zIndex: {
        100: "100",
        200: "200",
        201: "201",
        999: "999",
      },
    },
  },
  plugins: [],
};

/**
 * Creates a color value that supports Tailwind's opacity modifier syntax.
 * Usage: text-warm-white/80, bg-cream/96, etc.
 */
function withOpacity(rgbChannels) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(${rgbChannels.replace(/ /g, ", ")}, ${opacityValue})`;
    }
    return `rgb(${rgbChannels.replace(/ /g, ", ")})`;
  };
}
