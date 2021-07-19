import {
  FETCH_BOOKS_SUCCEEDED,
  CREATE_BOOK_SUCCEEDED,
  REMOVE_BOOK_SUCCEEDED,
  EDIT_BOOK_SUCCEEDED,
} from '../constants';

export default function books(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_BOOKS_SUCCEEDED:
      return [...state, ...payload];

    case CREATE_BOOK_SUCCEEDED: {
      const { id, title, category } = payload;
      return [...state, { id, title, category }];
    }

    case EDIT_BOOK_SUCCEEDED: {
      const updatedState = state.map((book) => (
        book.id === payload.id ? { ...book, ...payload } : book));

      return [...updatedState];
    }

    case REMOVE_BOOK_SUCCEEDED:
      return state.filter((book) => book.id !== payload.bookId);

    default:
      return state;
  }
}
