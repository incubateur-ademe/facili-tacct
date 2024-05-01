/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.tsx',
    './src/components/**/*.{html,js,jsx,ts,mdx}',
    './src/dsfr/**/*.{html,js,jsx,ts,mdx}',
    './src/lib/**/*.{html,js,jsx,ts,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // align with dsfr
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
  corePlugins: {
    // disable preflight to avoid conflicts with dsfr
    preflight: false,
  },
};

