import { actions } from './actions';

const initialState = {
  books: [],
  booksSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return state.merge({
        books: action.payload,
        originalData: action.payload
      });
    case actions.ADD_TO_CART:
      return state.merge({
        booksSelected: state.booksSelected.concat(action.payload)
      });
    case actions.ADD_ITEM:
      return state.merge({
        booksSelected: state.booksSelected.map(book => ({
          ...book,
          quantity: book.quantity + (book.id === action.payload)
        }))
      });
    case actions.REMOVE_ITEM:
      return state.merge({
        booksSelected: state.booksSelected.filter(book => book.id !== action.payload)
      });
    case actions.SEARCH_ITEM:
      return state.merge({
        books: state.originalData.filter(book => book.name.toLowerCase().includes(action.payload))
      });
    default:
      return state;
  }
}

export default reducer;
