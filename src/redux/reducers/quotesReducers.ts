import quotesActionType from '../actionTypes/quotes';

const {GET_QUOTES_SUCCESS, SET_LOADING, GET_QUOTE_OF_THE_DAY} =
  quotesActionType;

const initialState = {
  quotesList: [],
  isLoading: false,
  quoteOfTheDay: '',
};

const quotesReducer = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case GET_QUOTES_SUCCESS:
      return {...state, quotesList: payload, isLoading: false};
    case GET_QUOTE_OF_THE_DAY:
      return {...state, quoteOfTheDay: payload, isLoading: false};
    case SET_LOADING: {
      return {...state, isLoading: true};
    }
    default:
      return state;
  }
};

export default quotesReducer;
