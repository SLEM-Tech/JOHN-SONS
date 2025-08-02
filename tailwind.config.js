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
      background: "#060809",
      gray1: {
        100: "#FDF7FD",
        200: "#CCCCCC",
        300: "#EDEBE4",
        400: "#757575",
      },
      primary: "#0BCE5A",
      effect: "#E2C8C4",
      primaryColor: {
        100: "#74642F",
        200: "#C5A992",
        300: "#69A34E",
        400: "#41A92B",
      },

      dark: "#231834",
      text_color: "#19191D",
      secondary: {
        200: "#333",
        300: "#777",
        400: "#2f2f2f",
        500: "#848484",
        600: "#BFBFBF",
        700: "#E4E4E4",
        800: "#BDBDBD",
      },
      orange: "#FB5646",
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
