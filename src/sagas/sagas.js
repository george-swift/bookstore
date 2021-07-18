import { call, delay, put } from '@redux-saga/core/effects';
import * as api from '../api';
import {
  FETCH_BOOKS_SUCCEEDED, FETCH_BOOKS_FAILED,
  CREATE_BOOK_SUCCEEDED, CREATE_BOOK_FAILED,
  EDIT_BOOK_SUCCEEDED, EDIT_BOOK_FAILED,
  REMOVE_BOOK_SUCCEEDED, REMOVE_BOOK_FAILED,
} from '../constants';

export function* fetchBooks() {
  try {
    const { data } = yield call(api.fetchBooks);
    const books = data.data;

    yield put({
      type: FETCH_BOOKS_SUCCEEDED,
      payload: books,
    });
  } catch (e) {
    yield put({
      type: FETCH_BOOKS_FAILED,
      payload: { error: e.message },
    });
  }
}

export function* createBook({ payload }) {
  try {
    const { data } = yield call(api.createBook, payload);
    const book = data.data;

    yield put({
      type: CREATE_BOOK_SUCCEEDED,
      payload: book,
    });
  } catch (e) {
    yield put({
      type: CREATE_BOOK_FAILED,
      payload: { error: e.message },
    });
  }
}

export function* editBook({ payload }) {
  try {
    const {
      id, title, category, author, chapter, percentage,
    } = payload;

    const { data } = yield call(api.editBook, id, {
      title, category, author, chapter, percentage,
    });

    yield delay(1000);

    const updatedBook = data.data;

    yield put({
      type: EDIT_BOOK_SUCCEEDED,
      payload: updatedBook,
    });
  } catch (e) {
    yield put({
      type: EDIT_BOOK_FAILED,
      payload: { error: e.message },
    });
  }
}

export function* removeBook({ payload }) {
  try {
    const { data } = yield call(api.deleteBook, payload.bookId);
    const deletedBookId = data.data;

    yield put({
      type: REMOVE_BOOK_SUCCEEDED,
      payload: {
        bookId: deletedBookId,
      },
    });
  } catch (e) {
    yield put({
      type: REMOVE_BOOK_FAILED,
      payload: { error: e.message },
    });
  }
}
