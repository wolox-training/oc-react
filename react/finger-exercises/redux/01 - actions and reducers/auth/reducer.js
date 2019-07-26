import { actions } from './actions';

const initialState = {
  email: null,
  token: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGS_IN:
      return state.merge({
        email: action.payload.email,
        token: action.payload.token
      });
    default:
      return state;
  }
}

export default reducer;
