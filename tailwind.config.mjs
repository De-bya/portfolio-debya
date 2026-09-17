/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#4cc9f0',
        'brand-dark': '#1D3557',
        'brand-medium': '#457B9D',
        'brand-light': '#A8DADC',
        'brand-bg': '#F8F9FA',
        'brand-dot': '#023047',
        'brand-footer': '#2c2c2c',
        // Dark theme colors
        'dark-bg': '#0a0a0a',
        'dark-card': '#1a1a1a',
        'dark-card-hover': '#222222',
        'dark-text': '#f5f5f5',
        'dark-text-secondary': '#d1d5db',
        'dark-text-muted': '#9ca3af',
        'dark-border': '#2a2a2a',
        'dark-accent': '#4cc9f0',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUpArrows: {
          '0%': { opacity: '0', transform: 'translateY(calc(20px - 50%))' },
          '100%': { opacity: '1', transform: 'translateY(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s forwards',
        fadeInUpArrows: 'fadeInUpArrows 0.5s forwards',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
