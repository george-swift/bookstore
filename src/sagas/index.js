import { takeEvery, takeLatest } from '@redux-saga/core/effects';
import {
  createBook, editBook, fetchBooks, removeBook,
} from './sagas';
import {
  FETCH_BOOKS_STARTED, CREATE_BOOK_REQUESTED, REMOVE_BOOK_REQUESTED, EDIT_BOOK_REQUESTED,
} from '../constants';

export default function* rootSaga() {
  yield takeLatest(FETCH_BOOKS_STARTED, fetchBooks);
  yield takeEvery(CREATE_BOOK_REQUESTED, createBook);
  yield takeLatest(EDIT_BOOK_REQUESTED, editBook);
  yield takeEvery(REMOVE_BOOK_REQUESTED, removeBook);
}
