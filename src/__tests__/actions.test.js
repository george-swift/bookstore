import {
  uniqueID,
  FETCH_BOOKS_STARTED, CHANGE_FILTER,
  CREATE_BOOK_REQUESTED, UPDATE_REQUESTED,
  EDIT_BOOK_REQUESTED, REMOVE_BOOK_REQUESTED,
} from '../constants';

import {
  filterByCategory, fetchBooksStarted,
  createBookRequested, updateRequested,
  editBookRequested, removeBookRequested,
} from '../actions';

describe('Testing synchronous action creators', () => {
  const book = {
    id: uniqueID(),
    title: 'Test book',
    category: 'Learning',
  };

  test('Should create the fetch books action', () => {
    expect(fetchBooksStarted()).toStrictEqual(expect.objectContaining({
      type: FETCH_BOOKS_STARTED,
    }));
  });

  test('Should provide a filter category', () => {
    expect(filterByCategory('Sci-Fi')).toStrictEqual(expect.objectContaining({
      type: CHANGE_FILTER,
      payload: 'Sci-Fi',
    }));
  });

  test('Should create an update requested action', () => {
    expect(updateRequested(book)).toStrictEqual(expect.objectContaining({
      type: UPDATE_REQUESTED,
      payload: book,
    }));
  });

  test('Should start a create book requested action', () => {
    expect(createBookRequested(book)).toStrictEqual(expect.objectContaining({
      type: CREATE_BOOK_REQUESTED,
      payload: book,
    }));
  });

  test('Should start an edit book requested action', () => {
    expect(editBookRequested(book)).toStrictEqual(expect.objectContaining({
      type: EDIT_BOOK_REQUESTED,
      payload: book,
    }));
  });

  test('Should provide a remove book requested action', () => {
    expect(removeBookRequested(book)).toStrictEqual(expect.objectContaining({
      type: REMOVE_BOOK_REQUESTED,
      payload: {
        bookId: book.id,
      },
    }));
  });
});
