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
            yellow: '#F59E0B',
            dark: '#1E293B',
            gray: '#64748B',
          }
        }
      },
    },
    plugins: [],
  }