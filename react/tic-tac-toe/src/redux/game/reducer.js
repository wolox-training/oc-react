import Immutable from 'seamless-immutable';

import { actions } from './actions';

const initialState = {
  history: [Array(9).fill(null)],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

function reducer(state = Immutable(initialState), action) {
  switch (action.type) {
    case actions.GO_TO_MOVE:
      return state.merge({
        xIsNext: action.payload % 2 === 0,
        stepNumber: action.payload
      });
    case actions.ADD_MOVE:
      return state.merge({
        history: state.history.concat([action.payload]),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      });
    case actions.SET_WINNER:
      return state.merge({
        winner: action.payload
      });
    default:
      return state;
  }
}

export default reducer;
