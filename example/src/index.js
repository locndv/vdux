import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getStore } from '@a7/vdux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const ConnectedApp = () => (
  <Provider store={getStore()}>
    <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
registerServiceWorker();
