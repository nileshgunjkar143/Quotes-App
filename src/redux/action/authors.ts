import {GET} from '../../services';
import authorsActionsType from '../actionTypes/authors';

const {SET_LOADING, SET_AUTHORSLIST, GET_AUTHORS} = authorsActionsType;

const getAuthor = (data: string[]) => ({type: GET_AUTHORS, payload: data});
const setAuthor = (data: string[]) => ({type: SET_AUTHORSLIST, payload: data});
const authorActions = {
  getAuthorsList:
    (netInfo: boolean) =>
    async (dispatch: (arg0: {type: string; payload?: any}) => void) => {
      if (!netInfo) {
        try {
          dispatch({type: SET_LOADING});
          let data = await GET('/author', null, null);
          data = data.map((str: string) => str.trim());
          data.sort();
          data = [...new Set(data)];
          dispatch(getAuthor(data));
          dispatch(setAuthor(data));
        } catch (error: any) {
          console.log(error.message);
        }
      }
    },
  getFilterByAuthor:
    (authorsList: string[], searchAuthor: string) =>
    async (
      dispatch: (arg0: {type: string; payload: any}) => void,
      getState: () => {
        (): any;
        new (): any;
        authorsData: {(): any; new (): any; authors: any};
      },
    ) => {
      try {
        if (searchAuthor.length !== 0) {
          const results: string[] = authorsList.filter(
            (author: string) =>
              author.toLowerCase().indexOf(searchAuthor.toLowerCase()) > -1,
          );
          dispatch(setAuthor(results));
        } else {
          dispatch(setAuthor(getState().authorsData.authors));
        }
      } catch (error) {
        console.log(error);
      }
    },
};

export default authorActions;
