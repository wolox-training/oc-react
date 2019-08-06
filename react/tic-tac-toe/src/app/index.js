import React, { Fragment } from 'react';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { GAME, LOGIN } from '../constants/routes';
import store, { history } from '../redux/store';

import LoginForm from './screens/Login';
import Game from './screens/Game';
import TopBar from './screens/Game/components/Topbar';
import '../scss/application.scss';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <TopBar />
            <Switch>
              <AuthRoute path={GAME} component={Game} isPrivate />
              <AuthRoute path={LOGIN} component={LoginForm} />
            </Switch>
          </Fragment>
        </ConnectedRouter>
      </Provider>
    </AppContainer>
  );
}

export default App;
