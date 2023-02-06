import { combineReducers } from 'redux';
import booksList from './book';
import filter from './filter';

const rootReducer = combineReducers({
  booksList, filter,
});

export default rootReducer;
