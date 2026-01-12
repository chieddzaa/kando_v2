/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e40af', // Deep trust blue
          dark: '#1e3a8a',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#dbeafe', // Light blue accents
          dark: '#93c5fd',
        },
        neutral: {
          DEFAULT: '#6b7280', // Cool gray
          light: '#9ca3af',
          dark: '#374151',
        },
      },
      borderRadius: {
        card: '16px',
        button: '14px',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}

