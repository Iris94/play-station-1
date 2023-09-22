/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sony-font': ['sony-font', 'sans'],
      },
      textColor: {
        'sony-color': '#173d87'
      },
      backgroundColor: {
        'sony-red' : '#e43c0c',
        'sony-yellow' : '#f3e60b'
      }
    },
  },
  plugins: [],
}
