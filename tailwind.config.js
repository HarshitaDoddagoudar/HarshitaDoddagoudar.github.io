/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        space: {
          950: '#080B11',
          900: '#0D111A',
          850: '#131824',
          800: '#1B2232',
          700: '#262F44',
          600: '#34405B',
        },
        accent: {
          blue: '#3B82F6',
          'blue-dark': '#2563EB',
          'blue-subtle': 'rgba(59, 130, 246, 0.12)',
          warm: '#E25A38',
          'warm-subtle': 'rgba(226, 90, 56, 0.12)',
        },
        starlight: '#F1F3F8',
        lunardust: '#9BA3B8',
        cosmicmuted: '#5A647B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'drift-1': 'drift1 12s ease-in-out infinite',
        'drift-2': 'drift2 15s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        drift1: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(6px, -8px)' },
        },
        drift2: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(-8px, 6px)' },
        },
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.45)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px -1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
