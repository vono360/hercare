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
        cream: "#FAF7F2",
        "warm-white": "#FDFCF9",
        sage: {
          DEFAULT: "#8A9E8B",
          light: "#C2CFBF",
          dark: "#5C7260",
        },
        charcoal: {
          DEFAULT: "#2A2A2A",
          soft: "#3D3D3D",
        },
        taupe: {
          DEFAULT: "#B8A898",
          light: "#E8E0D8",
        },
        gold: {
          DEFAULT: "#C4A962",
          light: "#E8D9B0",
        },
        "text-primary": "#2A2A2A",
        "text-muted": "#655B51",
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
