import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors') 

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : {
        red : "red",
        transparent: 'transparent',
        current: 'currentColor',
        black: "black",
        white: "white",
        emerald: "emerald",
        indigo: "indigo",
        yellow: "yellow",
        stone: "warmGray",
        sky: "lightBlue",
        neutral: "trueGray",
        slate: "blueGray",
        dark: "rgb(1, 2, 23)",
        light : "rgb(209, 226, 240)",
        darkblue : "rgb(29,29,51)"
      }
    },
  },
  plugins: [],
}
export default config
