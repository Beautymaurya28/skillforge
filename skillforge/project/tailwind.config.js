/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a1f44', // Ink Blue
          light: '#1c3358',
          dark: '#081733',
        },
        secondary: {
          DEFAULT: '#ffffff', // White
          dark: '#f5f5f5',
        },
        accent: {
          DEFAULT: '#4fc3f7', // Light Sky Blue
          light: '#7ad3ff',
          dark: '#2bb5f5',
        },
        coolGray: {
          DEFAULT: '#dfe6ed', // Cool Gray
          light: '#ecf0f4',
          dark: '#c2cad1',
        },
        success: {
          DEFAULT: '#38b000', // Success Green
          light: '#4cd720',
          dark: '#2a8a00',
        },
        warning: {
          DEFAULT: '#ff9e00',
          light: '#ffb133',
          dark: '#cc7e00',
        },
        error: {
          DEFAULT: '#e53935',
          light: '#ef5350',
          dark: '#c62828',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glass-sm': '0 4px 16px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};