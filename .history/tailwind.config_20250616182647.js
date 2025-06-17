// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
extend: {
  animation: {
    'fade-in-up': 'fadeInUp 1s ease-out both',
  },
  keyframes: {
    fadeInUp: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  dropShadow: {
    glow: '0 0 8px rgba(255, 255, 255, 0.6)',
  }
}
