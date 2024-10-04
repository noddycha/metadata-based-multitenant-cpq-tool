/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 30%'
      }
    }
  },
  safelist: [
    'grid',
    'grid-cols-2',
    'w-32',
    'mx-auto',
    'my-4',
    'my-10',
    'font-light',
    'text-slate-500'
  ],
  plugins: []
}
