import { actions } from './actions';

const initialState = {
  history: [
    Array(9).fill(null)
  ],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

function reducer(state = initialState, action){
  switch (action.type){
    case actions.GO_TO_MOVE:
      return {
        ...state,
          xIsNext: action.payload % 2 === 0,
          stepNumber: action.payload
      };
    case actions.ADD_MOVE:
      return {
        ...state,
        history: state.history.concat([action.payload]),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      };
    case actions.SET_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    default:
      return state;
  }

}

export default reducer;
