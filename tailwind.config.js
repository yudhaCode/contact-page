/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "custom-bg-image": "url('/assets/bg-image.svg')",
      }),
      colors: {
        customGray: "#CDD5E0",
        customBlue: "#9958B4",
        customDark: "#101729",
        customPink: "#B44677",
        customDarkBlue: "#4036A9",
      },
    },
  },
  plugins: [],
};
