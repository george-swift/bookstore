import {
  form,
  CREATE_BOOK_SUCCEEDED,
  EDIT_BOOK_SUCCEEDED,
  UPDATE_REQUESTED,
  FETCH_BOOKS_STARTED,
} from '../constants';

export default function update(state = { pending: form, completed: false }, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_REQUESTED:
      return {
        pending: {
          ...state.pending,
          ...payload,
        },
        completed: false,
      };

    case CREATE_BOOK_SUCCEEDED:
    case EDIT_BOOK_SUCCEEDED:
      return {
        pending: form,
        completed: true,
      };

    case FETCH_BOOKS_STARTED:
      return {
        pending: form,
        completed: false,
      };

    default:
      return state;
  }
}
