/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Executive Club" Palette - Rich, Organic, Deep
        void: '#05110e', // Very deep green-black (instead of cold blue-black)
        panel: '#0a1f18', // Rich forest green panel
        
        // Brand Accents
        brand: {
          orange: '#F49D11', // Vibrant Logo Orange
          green: '#004E36',  // Royal Green
          sage: '#D8E1D1',   // Pale Sage
          cream: '#FDFDF7',  // Off-white Cream
          white: '#FFFFFF',  // Pure White
          gold: '#C7A46C',   // Antique Gold for elegance
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'], // Switched to Serif for Wisdom/Authority
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url('https://www.transparenttextures.com/patterns/stardust.png')", // Subtle noise texture
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
