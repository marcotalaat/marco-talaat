/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // enables .dark for dark mode
  theme: {
    extend: {
      colors: {
        // Core theme tokens
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",

        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",

        popover: "oklch(var(--popover))",
        "popover-foreground": "oklch(var(--popover-foreground))",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "oklch(var(--secondary))",
        "secondary-foreground": "oklch(var(--secondary-foreground))",

        muted: "oklch(var(--muted))",
        "muted-foreground": "oklch(var(--muted-foreground))",

        accent: "oklch(var(--accent))",
        "accent-foreground": "oklch(var(--accent-foreground))",

        destructive: "oklch(var(--destructive))",

        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Geist Variable", "sans-serif"],
      },
      outline: {
        // simplified: Tailwind can parse this
        ring: ["2px solid oklch(var(--ring))", "0px"],
      },
    },
  },
  plugins: [],
};
