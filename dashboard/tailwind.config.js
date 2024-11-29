/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // or 'selector' if you want a custom selector instead of the `class` strategy
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], 
  theme: {
    extend: {
      colors: {
        limeGreen: '#32CD32',
        brightRed: 'hsl(356, 69%, 56%)',
        facebook: 'hsl(208, 92%, 53%)',
        twitter: 'hsl(203, 89%, 53%)',
        instagram: {
          DEFAULT: 'hsl(37, 97%, 70%)',
          dark: 'hsl(329, 70%, 58%)'
        },
        youtube: 'hsl(348, 97%, 39%)',
        toggle: {
          DEFAULT: 'linear-gradient(hsl(210, 78%, 56%), hsl(146, 68%, 55%))'
        },
        veryDarkBlueBG: 'hsl(230, 17%, 14%)',
        veryDarkBlueTopBGPattern: 'hsl(232, 19%, 15%)',
        darkDesaturatedBlueCardBG: 'hsl(228, 28%, 20%)',
        desaturatedBlueText: 'hsl(228, 34%, 66%)',
        whiteText: 'hsl(0, 0%, 100%)'
      },
    }, 
  },
  plugins: [],
}
