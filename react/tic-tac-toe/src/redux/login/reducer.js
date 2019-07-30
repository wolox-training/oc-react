import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  values: {},
  token: ''
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.GET_LOGIN:
      return state.merge({
        values: !state.values
      });
    case actions.GET_LOGIN_SUCCESS:
      return state.merge({
        values: action.payload.values,
        token: action.payload.token,
        error: null
      });
    case actions.GET_LOGIN_FAILURE:
      return state.merge({
        error: action.payload.error
      });
    default:
      return state;
  }
}

export default reducer;
