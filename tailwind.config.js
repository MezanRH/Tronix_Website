/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F46B5B',
        'secound': '#383838',
        'purple': '#BB6BD9',
      },
      maxWidth: {
        'container': '1604px',
      },
      fontFamily: {
        'open': ['Poppins'],
      },
    },
  },
  plugins: [],
}

