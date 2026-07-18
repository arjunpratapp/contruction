/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'un-navy': {
          DEFAULT: '#0B1528',
          light: '#17253E',
        },
        'un-gold': {
          DEFAULT: '#D4AF37',
          hover: '#B8901C',
          translucent: 'rgba(212, 175, 55, 0.1)',
        },
        'un-cream': '#FDFBF7',
      },
      // 👇 ADD THIS ANIMATION EXTENSION BLOCK HERE
      keyframes: {
        blueprintFade: {
          '0%': { opacity: '0', transform: 'scale(1.03)' },
          '100%': { opacity: '0.05', transform: 'scale(1)' },
        },
        laserSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        foundationRise: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'blueprint-fade': 'blueprintFade 2s ease-out both',
        'laser-sweep': 'laserSweep 2s infinite linear',
        'foundation-rise': 'foundationRise 0.8s both cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in-slow': 'fadeIn 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}