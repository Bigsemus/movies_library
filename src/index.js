import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/configure-store';
import { TranslationProvider } from './Context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <TranslationProvider>
      <App />
    </TranslationProvider>
    ,
  </Provider>,
);
