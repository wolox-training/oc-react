import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const descriptionState = {
  matches: []
};

const initialState = completeState(descriptionState);

const reducerDescription = {
  primaryActions: [actions.GET_MATCHES]
};

export default createReducer(initialState, completeReducer(reducerDescription));
