/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The "Tech Consulting" Palette - Dark Base
        void: '#030712', // Darker than black, slightly cool
        panel: '#111827', // Card backgrounds
        
        // Brand Accents
        brand: {
          orange: '#F49D11', // Vibrant Logo Orange
          green: '#004E36',  // Royal Green (Deep, Jewel-tone)
          sage: '#D8E1D1',   // Pale Sage
          cream: '#FDFDF7',  // Off-white Cream
          white: '#FFFFFF',  // Pure White
          
          // Gradients
          gradient: 'linear-gradient(135deg, #F49D11 0%, #004E36 100%)',
        },
        
        surface: {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #F49D11 0deg, #004E36 180deg, #F49D11 360deg)',
        'grid-pattern': "linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'text-shimmer': 'text-shimmer 3s ease infinite',
      },
      keyframes: {
        'text-shimmer': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}
