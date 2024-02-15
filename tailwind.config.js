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
        customWhite: "#F8FAFC",
        customBlue: "#4036A9",
        customDark: "#111729",
        customPink: "#B44677",
        customDarkBlue: "#4036A9",
      },
    },
  },
  plugins: [],
};
