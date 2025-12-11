/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#121212',
        // New Brand Colors: Forest Green & Earthy Orange
        primary: '#1B4332', // Deep Forest Green (was Merlot)
        secondary: '#D97706', // Earthy Orange (was Gold)
        
        // Aliases for backward compatibility during refactor (mapping old names to new palette)
        merlot: '#1B4332', 
        gold: '#D97706',
        
        putty: '#F5F7F5', // Slightly greenish tint to the neutral
        cream: '#FFFFFF', // Cleaner white for fresh look
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}
