import { createTheme } from "@mui/material";
import "@fontsource/unbounded/200.css";
import "@fontsource/unbounded/300.css";
import "@fontsource/unbounded/400.css";
import "@fontsource/unbounded/500.css";
import "@fontsource/unbounded/700.css";


const testTheme = createTheme({
  typography: {
    htmlFontSize: 16,
    drawerLink: {
      fontFamily: '"Unbounded"',
      fontWeight: 400,
      fontSize: 20,
    },
    footer: {
      fontFamily: '"Unbounded"',
      fontWeight: 300,
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
    fontSize: 12,
  },
   palette: {
     primary: {
       main: '#739e47',
     },
     secondary: {
       main: '#59920D',
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