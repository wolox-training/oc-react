import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import game from './game/reducer';
import matches from './matches/reducer';

const reducer = combineReducers({
  game,
  matches
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
