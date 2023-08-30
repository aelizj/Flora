import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import testTheme from './assets/themes/theme';

const theme = testTheme;
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log('Inside client-side index.js file');

try {
  root.render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
} catch (error) {
  console.error(error);
  throw(error);
}
