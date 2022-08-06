import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './state/store';
import { Provider } from 'react-redux';
import App from './App';


const container = document.getElementById('root');
createRoot(container).render(
  <StrictMode>
    <Provider store={store}>
      <App />  
    </Provider>
  </StrictMode>
);
