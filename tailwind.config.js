/** @type {import('tailwindcss').Config} */

function color(rgb) {
  return `rgb(${rgb} / <alpha-value>)`;
}

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: color("250 247 242"),
        "warm-white": color("253 252 249"),
        sage: {
          DEFAULT: color("138 158 139"),
          light: color("194 207 191"),
          dark: color("92 114 96"),
        },
        charcoal: {
          DEFAULT: color("42 42 42"),
          soft: color("61 61 61"),
        },
        taupe: {
          DEFAULT: color("184 168 152"),
          light: color("232 224 216"),
        },
        gold: {
          DEFAULT: color("196 169 98"),
          light: color("232 217 176"),
        },
        "text-primary": color("42 42 42"),
        "text-muted": color("101 91 81"),
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
