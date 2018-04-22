import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
require('./index.css');

global._babelPolyfill = false;

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
