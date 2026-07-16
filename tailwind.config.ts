import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
                colors: {
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
                        },
                        // NUEVA MARCA: MEDINA ALMONTE — Lawyers Firm
                        'medina-negro': '#0A0A0A',
                        'medina-azul': '#0B1A2E',
                        'medina-dorado': '#D4AF37',
                        'medina-dorado-dark': '#a08520',
                        'medina-dorado-light': '#f4e5c2',
                        'medina-plata': '#C0C0C0',
                        // Premium Slate palette
                        'slate-deep': '#0f172a',
                        'slate-rich': '#1e293b',
                        'gold-bright': '#f4e5c2',
                        'gold-warm': '#c9a961',
                },
                fontFamily: {
                        'serif': ['Merriweather', 'serif'],
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)'
                },
                animation: {
                        'gold-shimmer': 'gold-shimmer 3s ease-in-out infinite',
                        'stat-pulse': 'stat-pulse-glow 4s ease-in-out infinite',
                },
                keyframes: {
                        'gold-shimmer': {
                                '0%, 100%': { opacity: '0.7' },
                                '50%': { opacity: '1' },
                        },
                        'stat-pulse-glow': {
                                '0%, 100%': { boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)' },
                                '50%': { boxShadow: '0 4px 30px rgba(212, 175, 55, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)' },
                        },
                },
        }
  },
  plugins: [tailwindcssAnimate],
};
export default config;