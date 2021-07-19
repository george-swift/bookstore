import {
  FETCH_BOOKS_STARTED,
  CREATE_BOOK_REQUESTED,
  EDIT_BOOK_REQUESTED,
  REMOVE_BOOK_REQUESTED,
  UPDATE_REQUESTED,
  CHANGE_FILTER,
} from '../constants';

export const fetchBooksStarted = () => ({ type: FETCH_BOOKS_STARTED });

export const filterByCategory = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

export const createBookRequested = (book) => ({
  type: CREATE_BOOK_REQUESTED,
  payload: book,
});

export const editBookRequested = (book) => ({
  type: EDIT_BOOK_REQUESTED,
  payload: book,
});

export const removeBookRequested = (book) => ({
  type: REMOVE_BOOK_REQUESTED,
  payload: {
    bookId: book.id,
  },
});

export const updateRequested = (payload) => ({
  type: UPDATE_REQUESTED,
  payload,
});
