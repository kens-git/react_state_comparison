/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    darkMode: 'class',
    extend: {},
    colors: {
      button: {
        DEFAULT: '#E5FEFF',
        dark: '#FFF5F2',
        hover: {
          DEFAULT: '#00DBFF',
          dark: '#FF4F4F',
        },
      },
      section: {
        DEFAULT: '#00DBFF',
        dark: '#FF4F4F',
      },
      list: {
        item: {
          DEFAULT: '#4E9BAE',
          dark: '#BC827B',
        },
      },
      document: {
        DEFAULT: '#FFFFFF',
        dark: '#FFFFFF',
      },
      txt: {
        DEFAULT: '#000000',
        dark: '#000000',
        title: {
          DEFAULT: '#4E9BAE',
          dark: '#BC827B',
        },
      },
    },
    borderRadius: {
      button: '0.5em',
      item: '1em',
      section: '1em',
    },
    padding: {
      button: '0.25em',
      default: '0.25em',
      document: '1em',
      item: '0.5em',
      section: '0.5em',
    },
    spacing: {
      default: '0.5em',
      input: '1em',
      section: '1em',
    },
    width: {
      input: '4em',
    },
  },
  plugins: [],
};
