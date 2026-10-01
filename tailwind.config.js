export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        grid: '#D6E6FF',
        paper: '#FFFCF5',
        ink: '#111111',
        navy: '#1A3A6B',
        sticky: '#FFF5B8',
        blush: '#FFB8D0',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['Patrick Hand', 'cursive'],
        round: ['Fredoka', 'sans-serif'],
      },
    },
  },
  plugins: [],
}