import { createStore, compose, combineReducers } from 'redux';

import game from './game/reducer';
import matches from './matches/reducer';

const reducer = combineReducers({
  game,
  matches
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducer, composeEnhancers());

// import { createStore, compose } from 'redux';

// import games from './game/reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export default createStore(games, composeEnhancers());
