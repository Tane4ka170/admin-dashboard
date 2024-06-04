import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider
  // theme={theme}
  >
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/admin-dashboard">
        <App />
        {/* <GlobalStyle /> */}
        <ToastContainer />
      </BrowserRouter>
    </PersistGate>
  </ThemeProvider>
);
