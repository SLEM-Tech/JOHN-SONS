import { nextui } from "@nextui-org/react";
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["var(--font-poppins)", "sans-serif"],
    },
    colors: {
      light: "#F3F3F3",
      background: "#F6F6D4",
      gray1: {
        100: "#FDF7FD",
        200: "#CCCCCC",
        300: "#F6F7D4",
        400: "#FCF5EA",
        500: "#F6F7D4",
      },
      primary: "#282828",
      effect: "#E2C8C4",
      primaryColor: {
        100: "#9BCB14",
        200: "#6ACB0F",
        300: "#69A34E",
        400: "#EAF586",
      },
      tertiary: {
        100: "#EAF586",
        200: "#ffff",
        300: "#EDEDF5",
        400: "#F6F6D23D",
      },

      dark: "#231834",
      text_color: "#19191D",
      secondary: {
        200: "#333",
        300: "#777",
        400: "#242424",
        500: "#848484",
        600: "#BFBFBF",
        700: "#E4E4E4",
        800: "#BDBDBD",
      },
      orange: "#FB5646",
    },
    backgroundImage: {
      heroGradient:
        "linear-gradient(180deg, #EDEDF5 43.29%, rgba(246, 246, 210, 0.24) 66.44%), linear-gradient(180deg, #FDF5E9 0%, #EDEDF5 100%)",
    },
    animation: {
      "spin-slow": "spin 8s linear infinite",
    },
  },
  screens: {
    xs: "400px",
    slg: "999px", // @media (min-width: 999pxs
    xmd: "800px", // @media (min-width: 800px)
    ...require("tailwindcss/defaultTheme").screens,
  },
};
export const plugins = [nextui()];
