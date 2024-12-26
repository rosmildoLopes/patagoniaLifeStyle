import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        text: "#3C6068",
        footer: "#ECEEE7",
        subFooter: "#3C6068", 
        footerText: "#ECEEE7",
      },
      screens: {
				xs: '475px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1536px',
			},
    },
  },
  plugins: [],
} satisfies Config;
