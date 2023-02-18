import authorsActionsType from '../actionTypes/authors';
const {GET_AUTHORS, SET_AUTHORSLIST, SET_LOADING, SET_DROPDOWN} =
  authorsActionsType;

const initialState = {
  authors: [],
  isLoading: false,
  authorsList: [],
  dropdown: false,
};

const authorReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case GET_AUTHORS: {
      return {...state, authors: action.payload, isLoading: false};
    }
    case SET_AUTHORSLIST: {
      return {...state, authorsList: action.payload, isLoading: false};
    }
    case SET_LOADING: {
      return {...state, isLoading: true};
    }
    case SET_DROPDOWN: {
      return {...state, dropdown: action.payload};
    }
    default:
      return state;
  }
};

export default authorReducer;
