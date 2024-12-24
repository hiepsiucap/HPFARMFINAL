/**
 * @format
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "#12372A",
        primary2: "#F9F7F1",
        secondary: "#EE316B",
        background: "#FBFADA",
        button: "#436850",
        text: "#516F90",
        footer: "#436850",
        bg2: "#222222",
        bg3: "#414141",
        text: "#747579",
        // ...
      },
      backgroundImage: {
        "my-image":
          "url('https://res.cloudinary.com/dhhuv7n0h/image/upload/v1714202688/div.background_h76wu5.png')",
      },
    },
  },
  plugins: [],
};
