import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app';
import LoginForm from './app/screens/Form';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';
import store from './redux/store';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/login" component={LoginForm} />
            <Route exact path="/" component={App} />
          </div>
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
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
