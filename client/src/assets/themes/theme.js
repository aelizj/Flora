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
});

export default testTheme;