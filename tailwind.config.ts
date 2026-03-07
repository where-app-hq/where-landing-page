import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#EC008C',
        'accent-dark': '#c4007a',
        secondary: '#FCB250',
      },
      fontFamily: {
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.75rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FCB250 0%, #EC008C 100%)',
        'brand-gradient-reverse': 'linear-gradient(135deg, #EC008C 0%, #FCB250 100%)',
      },
    },
  },
  plugins: [],
}

export default config
