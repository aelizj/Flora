import { createTheme } from "@mui/material";
import "@fontsource/unbounded/200.css";
import "@fontsource/unbounded/300.css";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/700.css";


const testTheme = createTheme({
  typography: {
    htmlFontSize: 16,
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
      textTransform: 'uppercase',
      fontSize: 16,
      fontWeight: 600
    },
    drawerLink: {
      fontFamily: '"Unbounded"',
      fontWeight: 400,
      fontSize: 20,
    },
    footer: {
      fontFamily: '"Unbounded"',
      fontWeight: 500,
      fontSize: 10,
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
       main: '#739e47',
     },
     secondary: {
       main: '#477335',
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

export default testTheme;