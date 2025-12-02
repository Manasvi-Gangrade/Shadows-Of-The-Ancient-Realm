import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Cinzel', 'serif'],
        accent: ['Rajdhani', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom game colors
        gold: {
          DEFAULT: "hsl(var(--gold))",
          dark: "hsl(var(--gold-dark))",
          light: "hsl(var(--gold-light))",
        },
        teal: {
          DEFAULT: "hsl(var(--teal))",
          dark: "hsl(var(--teal-dark))",
          glow: "hsl(var(--teal-glow))",
        },
        crimson: {
          DEFAULT: "hsl(var(--crimson))",
          dark: "hsl(var(--crimson-dark))",
        },
        ember: "hsl(var(--ember))",
        void: "hsl(var(--void))",
        shadow: "hsl(var(--shadow))",
        mist: "hsl(var(--mist))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-gold': 'var(--gradient-gold)',
        'gradient-mystical': 'var(--gradient-mystical)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-section': 'var(--gradient-section)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'gold': 'var(--shadow-gold)',
        'teal': 'var(--shadow-teal)',
        'crimson': 'var(--shadow-crimson)',
        'card': 'var(--shadow-card)',
        'inner-gold': 'inset 0 0 30px hsl(var(--gold) / 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-left": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(var(--gold) / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(var(--gold) / 0.6)" },
        },
        "gentle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "breathe": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-left": "slide-left 0.6s ease-out forwards",
        "slide-right": "slide-right 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gentle-float": "gentle-float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "breathe": "breathe 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
