/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xl: '1400px',
      lg: '1200px',
      md: '991px',
      sm: '767px',
      xs: '576px',
      xxs: '370px',
    },
    extend: {
    }
  },
  plugins: [],
}

