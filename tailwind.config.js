/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F17',
          card: '#111827',
          surface: '#1E293B',
          muted: '#334155',
          border: '#1E293B',
          accent: '#0284C7',     // Swedish precision cyan/blue
          accentHover: '#0369A1',
          gold: '#F59E0B',       // Warm trust gold
          goldHover: '#D97706',
          text: '#F8FAFC',
          textMuted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 2px 8px rgba(2, 132, 199, 0.25)',
        'gold-glow': '0 2px 8px rgba(245, 158, 11, 0.25)',
        'card': '0 4px 16px -2px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.06)'
      }
    },
  },
  plugins: [],
}
