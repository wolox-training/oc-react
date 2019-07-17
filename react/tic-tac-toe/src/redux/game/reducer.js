import { actions } from './actions';

const initialState = {
  history: [{
    squares: Array(9).fill(null)
  }],
  stepNumber: 0,
  xIsNext: true,
  winner: null
};

function reducer(state = initialState, action){

}

export default reducer;
