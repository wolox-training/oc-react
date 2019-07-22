import { actions } from './actions';

const initialState = {
  matches: [],
  loading: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return {
        ...state,
        loading: !state.loading
      };
    case actions.GET_MATCHES_SUCCESS:
      return {
        ...state,
        matches: action.payload.matches,
        loading: false,
        error: null
      };
    case actions.GET_MATCHES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export default reducer;
