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
        matches: action.payload,
        loading: !state.loading
      };
    default:
      return state;
  }
}

export default reducer;
