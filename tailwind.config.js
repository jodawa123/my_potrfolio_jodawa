/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d0d9e6',
          300: '#a6b7cc',
          400: '#7a91b0',
          500: '#5a6f8c',
          600: '#455a78',
          700: '#3a4a64',
          800: '#2f3d52',
          900: '#1e2a3a',
        },
        accent: {
          50: '#f4f6f9',
          100: '#e6eaf0',
          200: '#cdd5e1',
          300: '#a7b5c9',
          400: '#7e91af',
          500: '#63799b',
          600: '#4e6382',
          700: '#3f506b',
          800: '#344256',
          900: '#232f3f',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}