import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { register } from './serviceWorker';
import './config/i18n';
import './scss/application.scss';

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

// Render once
render();

register();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    render();
  });
}
