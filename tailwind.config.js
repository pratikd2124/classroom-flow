/* @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",'./index.html',],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3490dc', // Primary color
          dark: '#1a202c',    // Darker shade
        },
        secondary: {
          DEFAULT: '#38c172', // Secondary color
          dark: '#276749',    // Darker shade
        },
        dark: {
          primary: '#1a202c',
           // Dark mode primary color
          // ... other dark mode colors
        },
      }
    },
  },
  plugins: [],
  darkMode: ['class'], // 'media' or 'class'
}

