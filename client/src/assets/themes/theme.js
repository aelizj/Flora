import { createTheme } from "@mui/material";
import "@fontsource/unbounded/200.css";
import "@fontsource/unbounded/300.css";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/700.css";


const floraTheme = createTheme({
  typography: {
    htmlFontSize: 20,
    fontFamily: [
      '"Instrument Sans"',
      'sans-serif',
      'Roboto',
      'Arial',
      '"Helvetica Neue"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    button: {
      fontFamily: '"Unbounded"',
      textTransform: 'uppercase',
      fontSize: 14,
      fontWeight: 500,
    },
    drawerLink: {
      fontFamily: '"Unbounded"',
      fontWeight: 400,
      fontSize: 20,
    },
    footer: {
      fontFamily: '"Unbounded"',
      fontWeight: 200,
      fontSize: 6,
    },
    h1: {
      fontFamily: [
        '"Unbounded"',
      ].join(','),
    },
    h2: {
      fontFamily: [
        '"Unbounded"',
      ].join(','),
    },
    h3: {
      fontFamily: [
        '"Unbounded"',
      ].join(','),
    },
    h4: {
      fontFamily: [
        '"Unbounded"',
      ].join(','),
    },
    h5: {
      fontFamily: [
        '"Unbounded"',
      ].join(','),
    },
    h6: {
      fontFamily: [
        '"Unbounded"',
      ].join(','),
    },
  },
   palette: {
     primary: {
       main: '#7E9458',
       light: '#A4BB7E',
     },
     secondary: {
       main: '#5C6D40 ',
     },
   },
   components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          drawerLink: 'body1',
          footer: 'body2',
        }
      }
    }
   },
   customIcon: {
    color: 'primary',
  },
});

export default floraTheme;