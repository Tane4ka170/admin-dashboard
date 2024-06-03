import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider
  // theme={theme}
  >
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/admin-dashboard">
        <App />
        {/* <GlobalStyle /> */}
        {/* <Toaster /> */}
      </BrowserRouter>
    </PersistGate>
  </ThemeProvider>
);
