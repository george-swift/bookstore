import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import notifications from './notifications';
import update from './updates';

const rootReducer = combineReducers({
  books, filter, notifications, update,
});

export default rootReducer;
