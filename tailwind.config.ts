import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'royal-blue': '#162660',
        'powder-blue': '#D0E6FD',
        'bone': '#F1E4D1',
        'lake-blue': '#6D8EC5',
        'rich-black': '#0E0F19',
        'green-yellow' : '#B0FE76',

      },
    },
  },
  plugins: [],
} satisfies Config;
