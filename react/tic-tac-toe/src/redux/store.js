import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import game from './game/reducer';
import matches from './matches/reducer';
import login from './auth/reducer';

export const history = createBrowserHistory();

const reducer = combineReducers({
  game,
  matches,
  form,
  login,
  router: connectRouter(history)
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducer, composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)));
