/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#11112e',
        'off-white': '#e1e7e0',
        'royal-blue': '#2c51a3',
        'accent-silver': '#d4d4d4',
        'text-dark': '#11112e',
        'axis-green': '#48D87E',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 5vw, 4.5rem)', { letterSpacing: '-1px', lineHeight: '1.1' }],
        'section': ['clamp(2rem, 3vw, 3rem)', { lineHeight: '1.2' }],
        'subsection': ['clamp(1.5rem, 2vw, 2rem)', { lineHeight: '1.3' }],
      },
      borderRadius: {
        'axis': '12px',
        'axis-lg': '16px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(44, 81, 163, 0.4)',
        'glow-hover': '0 8px 30px rgba(44, 81, 163, 0.5)',
        'soft': '0 4px 24px rgba(17, 17, 46, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
