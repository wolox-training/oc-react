import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { GAME, LOGIN } from './constants/routes';
import App from './app';
import LoginForm from './app/screens/Login';
import './config/i18n';
import './scss/application.scss';
import { register } from './serviceWorker';
import store, { history } from './redux/store';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={GAME} component={App} />
            <Route path={LOGIN} component={LoginForm} />
          </Switch>
        </ConnectedRouter>
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
