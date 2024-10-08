/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {  
    screens: { 
      sm: '480px', 
      md: '768px', 

      lg: '1180px', 
      xl: '1440px', 
    },

    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': 'rgb(31, 31, 31)',
      'gray-light': '#d3dce6',
      'bg': 'rgb(40, 40, 40)',
      'green': 'rgb(0, 70, 56)',
      'gren':'rgb(21, 150, 67)'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transformOrigin: {
        'top-left-1/3-3/4': '33% 75%',
      }
    }
  },  
  plugins: [],
}