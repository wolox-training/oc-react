import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  userEmail: '',
  token: '',
  loading: null,
  isLogged: null
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.GET_LOGIN:
      return state.merge({
        loading: true,
        isLogged: false
      });
    case actions.GET_LOGIN_SUCCESS:
      return state.merge({
        userEmail: action.payload.userEmail,
        token: action.payload.token,
        error: null,
        loading: false,
        isLogged: true
      });
    case actions.GET_LOGIN_FAILURE:
      return state.merge({
        error: action.payload.error,
        loading: false,
        isLogged: false
      });
    default:
      return state;
  }
}

export default reducer;
