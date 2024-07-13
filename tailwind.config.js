/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#5a6acf',
        customLightPurple: '#8593ed',
        customBlue: '#37b1cd',
        customLightBlue: '#c7ceff',
        customYellow: '#faa645',
        customWhite: '#f1f2f7',
        customGray: '#bfc5d8',
        customLightGray: '#e4e7f5',

        // Add more custom colors as needed
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}
}
