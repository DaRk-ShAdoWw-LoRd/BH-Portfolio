/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#edfee0',
          100: '#d3ffc2',
          200: '#7CFF57',
          300: '#4dff1f',
          400: '#2ee600',
          500: '#25bf00',
          600: '#1c9900',
          700: '#147300',
          800: '#0c4d00',
          900: '#042600',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neon: {
          green: '#7CFF57',
          yellow: '#FFE357',
          aqua: '#57FFE3',
        },
        dark: {
          100: '#1a1a1a',
          200: '#151515',
          300: '#111111',
          400: '#0d0d0d',
          500: '#080808',
          600: '#040404',
          700: '#000000',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        neonPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #7CFF57 0%, #FFE357 50%, #57FFE3 100%)',
      },
    },
  },
  plugins: [],
};