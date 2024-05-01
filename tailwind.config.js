/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, tsx}",
    "./src/components/**/*.{html, js, ts, tsx}",
    "./src/app/**/*.{html, js, ts, tsx}",
    "./src/dsfr/**/*.{html, js, ts, tsx}",
    "./src/lib/**/*.{html, js, ts, tsx}",
    "./src/**/*",
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    // align with dsfr
    screens: {
      sm: "36em",
      md: "48em",
      lg: "62em",
      xl: "78em",
    },
  },
  plugins: [],
  corePlugins: {
    // disable preflight to avoid conflicts with dsfr
    preflight: false,
  },
};

