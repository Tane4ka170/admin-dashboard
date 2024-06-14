import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { App } from './App';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import { Provider } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/admin-dashboard">
          <App />
          <GlobalStyle />
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </ThemeProvider>
  </Provider>
);
