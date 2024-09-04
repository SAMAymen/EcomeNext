import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FDFDEA", // Lightest shade
          100: "#FDF6B2", // Lighter shade
          200: "#FCE96A", // Light shade
          300: "#FACA15", // Default primary color
          400: "#E3A008", // Darker shade
          500: "#C27803", // Dark shade
          600: "#9F580A", // Darkest shade
          700: "#8E4B10", // Even darker shade
          800: "#723B13", // Very dark shade
          900: "#633112", // Extremely dark shade
        },
        gray: {
          50: "#F9FAFB", // Lighter shade, similar to Flowbite
          100: "#F3F4F6", // Lighter shade
          200: "#E5E7EB", // Lighter gray
          300: "#D1D5DB", // Light gray
          400: "#A1A1AA", // More muted medium gray
          500: "#737373", // Slightly softer medium gray
          600: "#52525B", // Darker medium gray
          700: "#3F3F46", // Dark gray, close to Instagram's
          800: "#27272A", // Darker shade for backgrounds
          900: "#18181B", // Very dark gray, almost black
        },
        // Add other custom colors here
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
