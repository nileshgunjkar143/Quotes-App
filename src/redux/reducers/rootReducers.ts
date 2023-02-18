import { combineReducers } from '@reduxjs/toolkit';
import authorReducer from './authorReducer';
import quotesReducer from './quotesReducers';

const rootReducers = combineReducers({
    authorsData: authorReducer,
    quotesData: quotesReducer,
});
export default rootReducers;
