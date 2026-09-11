/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#ffd6e0',
          'pink-dark': '#f7a8b8',
          'pink-deep': '#e26d85',
          rose: '#ffacc5',
          lavender: '#e8dcff',
          'lavender-dark': '#c8b6ff',
          cream: '#fffdf9',
          card: '#fffbf9',
          peach: '#ffe5d9',
          purple: '#ede7f6',
          text: '#4a3e47',
          'text-muted': '#806e7a',
          gold: '#dfab68'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        handwriting: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(230, 160, 180, 0.25)',
        'polaroid': '0 14px 28px rgba(0,0,0,0.06), 0 10px 10px rgba(0,0,0,0.04)',
        'polaroid-hover': '0 20px 35px rgba(226, 109, 133, 0.2), 0 12px 16px rgba(0,0,0,0.08)',
        'letter': '0 25px 50px -12px rgba(180, 140, 170, 0.25)',
        'glow': '0 0 25px rgba(247, 168, 184, 0.5)'
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSlow 3s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(3deg)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
