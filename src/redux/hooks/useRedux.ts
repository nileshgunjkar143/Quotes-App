import {useAppDispatch, useAppSelector} from './hooks';

export const useRedux = () => {
  const {quotesData, authorsData}:any = useAppSelector(state => state);
  const dispatch = useAppDispatch();
  return {quotesData,authorsData, dispatch};
};
