import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Patient brand colors
        patient: {
          green: '#4ADE80',
          'green-dark': '#22C55E',
          purple: '#A78BFA',
          'purple-dark': '#8B5CF6',
          orange: '#FB923C',
          'orange-dark': '#F97316',
          pink: '#F472B6',
          'pink-dark': '#EC4899',
          amber: '#FBBF24',
        },
        // Provider brand colors
        provider: {
          blue: '#3B82F6',
          'blue-dark': '#2563EB',
          green: '#10B981',
          'green-dark': '#059669',
          purple: '#8B5CF6',
          'purple-dark': '#7C3AED',
          amber: '#F59E0B',
          'amber-dark': '#D97706',
          pink: '#EC4899',
          'pink-dark': '#DB2777',
          cyan: '#06B6D4',
          'cyan-dark': '#0891B2',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%': { boxShadow: '0 0 20px currentColor, 0 0 40px currentColor' },
          '100%': { boxShadow: '0 0 30px currentColor, 0 0 60px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
