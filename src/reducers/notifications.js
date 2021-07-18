import {
  UI,
  FETCH_BOOKS_STARTED, CREATE_BOOK_REQUESTED, EDIT_BOOK_REQUESTED, REMOVE_BOOK_REQUESTED,
  FETCH_BOOKS_SUCCEEDED, CREATE_BOOK_SUCCEEDED, EDIT_BOOK_SUCCEEDED, REMOVE_BOOK_SUCCEEDED,
  FETCH_BOOKS_FAILED, CREATE_BOOK_FAILED, EDIT_BOOK_FAILED, REMOVE_BOOK_FAILED,
} from '../constants';

export default function notifications(state = UI, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_BOOKS_STARTED:
    case CREATE_BOOK_REQUESTED:
    case EDIT_BOOK_REQUESTED:
    case REMOVE_BOOK_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_BOOKS_SUCCEEDED:
    case CREATE_BOOK_SUCCEEDED:
    case EDIT_BOOK_SUCCEEDED:
    case REMOVE_BOOK_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case FETCH_BOOKS_FAILED:
    case CREATE_BOOK_FAILED:
    case EDIT_BOOK_FAILED:
    case REMOVE_BOOK_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    default:
      return state;
  }
}
