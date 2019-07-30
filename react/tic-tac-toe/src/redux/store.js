import { createStore, compose } from 'redux';

import games from './game/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(games, composeEnhancers());
