
import { extendTheme } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { MultiSelectTheme } from "chakra-multiselect";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fontSizes = {
  xs: "0.75rem", // 7.5px
  sm: "0.875rem", // 8.75px
  md: "1rem", // 10px
  lg: "1.125rem", // 11.25px
  xl: "1.25rem", // 12.5px
  "2xl": "1.5rem", // 15px
  "3xl": "1.875rem", // 18.75px
  "4xl": "2.25rem", // 22.5px
  "5xl": "3rem", // 30px
  "6xl": "3.75rem", // 37.5px
};

const backgroundColor = {
  gray: {
    50: "#f9f9f9",
    100: "#f2f2f2",
    200: "#e5e5e5",
    300: "#cccccc",
    400: "#b3b3b3",
    500: "#999999",
    600: "#808080",
    700: "#666666",
    800: "#4d4d4d",
    900: "#333333",
  },
  custom: {
    grayTransparent: "rgba(204,204,204,0.1)",
  },
};

const fonts = {
  heading: "Roboto, sans-serif",
  body: "Figtree, sans-serif",
  mono: "Menlo, monospace",
};

const lineHeights = {
  normal: "1.5",
  none: "1",
  shorter: "1.25",
  short: "1.375",
  base: "1.5",
  tall: "1.625",
  taller: "2",
};
const fontWeights = {
  normal: 400,
  medium: 500,
  bold: 700,
};
const globalStyles = {
  html: {
    fontSize: "62.5%",
  },
  body: {
    fontFamily: "body",
    lineHeight: "base",
    fontSize: "3xl",
  },
};

//extend the theme
const theme = extendTheme({
  config,
  backgroundColor,
  fontSizes,
  lineHeights,
  fonts,
  fontWeights,
  styles: {
    global: globalStyles,
  },
  components: {
    MultiSelect: MultiSelectTheme,
  },
});

export default theme;
