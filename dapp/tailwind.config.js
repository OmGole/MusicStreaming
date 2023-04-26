/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
    boxShadow: {
      'overlay': 'inset 0 0 0 2000px rgba(0, 0, 0, 0.7)',
    },
    colors:{
      primary:'#971ffd',
      secondary:'#000000',
      third:"blue"
    },
    fontFamily:{
      poppins:['Poppins','sans-serif'],
      montserrat:['Montserrat','sans-serif']
    },
    backgroundImage: {
      'showcase':"url('./assets/headphones.jpg')",
    }
  },
    screens: {
      sm: "400px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
