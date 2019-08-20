import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  matches: [],
  loading: false
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return state.merge({
        loading: !state.loading
      });
    case actions.GET_MATCHES_SUCCESS:
      return state.merge({
        matches: action.payload.matches,
        loading: false,
        error: null
      });
    case actions.GET_MATCHES_FAILURE:
      return state.merge({
        error: action.payload.error
      });
    default:
      return state;
  }
}

export default reducer;
