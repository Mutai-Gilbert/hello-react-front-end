import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import App from './src/App';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);