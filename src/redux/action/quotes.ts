import {DELETE, GET, getQuotesByAuthor, PATCH, POST} from '../../services';
import {quotesType} from '../../types/quotestype/quotesType';
import quotesActionType from '../actionTypes/quotes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageKeys: any = {
  QUOTE_OF_D_DAY: 'QuoteOfTheDay',
  QUOTE_DATE: 'QUOTE_DATE',
  PAST_10_QUOTES: 'PAST_10_QUOTES',
};

const {GET_QUOTES_SUCCESS, SET_LOADING, GET_QUOTE_OF_THE_DAY} =
  quotesActionType;

const quotesActionCreator = (data: quotesType[]) => ({
  type: GET_QUOTES_SUCCESS,
  payload: data,
});

const quotesLoading = () => ({
  type: SET_LOADING,
});

const quotesActions = {
  //Get quotes data action
  getQuotesList:
    (netInfo: boolean) =>
    async (
      dispatch: (arg0: {type: string; payload?: any}) => void,
      getState: () => {(): any; new (): any; quotesData: {quotesList: any}},
    ) => {
      const {quotesList} = getState().quotesData;
      if (!netInfo) {
        try {
          dispatch(quotesLoading());
          const data = await GET('/quote', null, null);
          if (data[0].author.length !== 0) {
            dispatch(quotesActionCreator(data));
          }
        } catch (error: any) {
          console.log(error.message);
        }
      } else {
        dispatch(quotesActionCreator(quotesList));
      }
    },

  //Get quotes by author name action
  getQuotesListByAuthor:
    (authorName: string, netInfo: boolean) =>
    async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
      if (!netInfo) {
        try {
          dispatch(quotesLoading());
          const data = await getQuotesByAuthor(authorName);
          dispatch(quotesActionCreator(data));
        } catch (error: any) {
          console.log(error.message);
        }
      }
    },

  //Like action
  handleLikeClicked:
    (quoteId: any) =>
    async (
      dispatch: (arg0: {type: string; payload?: any}) => void,
      getState: () => {(): any; new (): any; quotesData: {quotesList: any}},
    ) => {
      const {quotesList} = getState().quotesData;
      try {
        const data = await POST(`/quote/${quoteId}/likes/up`, null);
        if (data.message.includes('quote likes')) {
          const newLikeCount = +data.message
            .split(':')[1]
            .split('disliked')[0]
            .trim();
          console.log(typeof newLikeCount);
          const newQuoteList = quotesList.map(
            (quote: {_id: any; likes: any}) => ({
              ...quote,
              likes: quote._id === quoteId ? newLikeCount : quote.likes,
            }),
          );
          dispatch(quotesActionCreator(newQuoteList));
        }
      } catch (error: any) {
        console.log(error.message);
      }
    },

  //Add new quote action
  addQuote:
    (newQuote: any) =>
    async (
      dispatch: (arg0: {type: string; payload: any}) => void,
      getState: () => {(): any; new (): any; quotesData: {quotesList: any}},
    ) => {
      const {quotesList} = getState().quotesData;
      try {
        const data = await POST('/quote', newQuote);
        dispatch(quotesActionCreator([...quotesList, data.quote]));
      } catch (error: any) {
        console.log(error.message);
      }
    },

  //Edit quote By ID action
  editQuoteItem:
    (id: string, data: {quote: string; author: string}) => async () => {
      try {
        await PATCH(`/quote/${id}`, data);
      } catch (error) {
        console.log(error);
      }
    },

  deleteQuoteById: (id: string) => async () => {
    try {
      await DELETE(`/quote/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  getQuoteOfTheDay:
    (netInfo: boolean) =>
    async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
      if (!netInfo) {
         dispatch(quotesLoading());
      const current = new Date();
      const todayDate = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`;
      const storedDate = await AsyncStorage.getItem(
        AsyncStorageKeys.QUOTE_DATE,
      );

      if (storedDate && storedDate !== todayDate) {
        AsyncStorage.removeItem(AsyncStorageKeys.QUOTE_OF_D_DAY);
        AsyncStorage.removeItem(AsyncStorageKeys.QUOTE_DATE);
      }
      const quoteString = await AsyncStorage.getItem(
        AsyncStorageKeys.QUOTE_OF_D_DAY,
      );
      if (quoteString) {
        const quote = JSON.parse(quoteString);
        dispatch({
          type: GET_QUOTE_OF_THE_DAY,
          payload: quote,
        });
        return;
      }
      const allQuotes = await GET('/quote', null, null);
      const randomNumer = Math.floor(Math.random() * allQuotes.length);
      AsyncStorage.setItem(
        AsyncStorageKeys.QUOTE_OF_D_DAY,
        JSON.stringify(allQuotes[randomNumer]),
      );
      AsyncStorage.setItem(AsyncStorageKeys.QUOTE_DATE, todayDate);

      const quote = allQuotes[randomNumer];
      dispatch({
        type: GET_QUOTE_OF_THE_DAY,
        payload: quote,
      });
      }
    },
};

export default quotesActions;
