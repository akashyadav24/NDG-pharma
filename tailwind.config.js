/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand color system for NDG Pharmaceutical
        brand: {
          blue: '#0B3C5D', // Primary deep blue
          dark: '#072C45', // Dark blue
          teal: '#14B8A6', // Teal accent
          'teal-dark': '#0F8F82', // Dark teal
        },
        surface: {
          light: '#F8FAFC', // Light background
          border: '#E5E7EB', // Border
        },
        ink: {
          primary: '#1F2937', // Text primary
          secondary: '#6B7280', // Text secondary
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(11, 60, 93, 0.08)',
        card: '0 12px 40px -12px rgba(11, 60, 93, 0.16)',
        lift: '0 24px 60px -16px rgba(11, 60, 93, 0.28)',
        glow: '0 8px 32px -8px rgba(20, 184, 166, 0.45)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #072C45 0%, #0B3C5D 55%, #14B8A6 130%)',
        'cta-gradient':
          'linear-gradient(120deg, #072C45 0%, #0B3C5D 45%, #0F8F82 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-26px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.6' },
          '70%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
