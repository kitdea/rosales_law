import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        ink2: "#161616",
        paper: "#F7F6F3",
        brass: "#B08D57",
        brassHover: "#C9A36A",
        grey: "#6B6B6B",
        grey2: "#9A968E",
        line: "rgba(255,255,255,0.14)",
        lineDark: "rgba(10,10,10,0.12)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1360px",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(.16,1,.3,1)",
      },
      keyframes: {
        drift: { to: { transform: "translate3d(0,-18px,0) scale(1.04)" } },
        pulse2: { "0%,100%": { opacity: "0.3" }, "50%": { opacity: "1" } },
        heroZoom: {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1.18)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite alternate",
        cue: "pulse2 2s ease-in-out infinite",
        heroZoom: "heroZoom 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
