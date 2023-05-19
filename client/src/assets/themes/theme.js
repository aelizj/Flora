import { createTheme } from "@mui/material";

const testTheme = createTheme({
  typography: {
    fontFamily: [
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
  },
   palette: {
     primary: {
       main: '#D3F4A6',
     },
     secondary: {
       main: '#59920D',
     },
   },
});

export default testTheme;