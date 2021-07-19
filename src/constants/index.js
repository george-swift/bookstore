export const FETCH_BOOKS_STARTED = 'FETCH_BOOKS_STARTED';
export const FETCH_BOOKS_SUCCEEDED = 'FETCH_BOOKS_SUCCEEDED';
export const FETCH_BOOKS_FAILED = 'FETCH_BOOKS_FAILED';

export const CHANGE_FILTER = 'CHANGE_FILTER';

export const CREATE_BOOK_REQUESTED = 'CREATE_BOOK_REQUESTED';
export const CREATE_BOOK_SUCCEEDED = 'CREATE_BOOK_SUCCEEDED';
export const CREATE_BOOK_FAILED = 'CREATE_BOOK_FAILED';

export const EDIT_BOOK_REQUESTED = 'EDIT_REQUESTED';
export const EDIT_BOOK_SUCCEEDED = 'EDIT_BOOK_SUCCEEDED';
export const EDIT_BOOK_FAILED = 'EDIT_BOOK_FAILED';

export const REMOVE_BOOK_REQUESTED = 'REMOVE_BOOK_REQUESTED';
export const REMOVE_BOOK_SUCCEEDED = 'REMOVE_BOOK_SUCCEEDED';
export const REMOVE_BOOK_FAILED = 'REMOVE_BOOK_FAILED';

export const UPDATE_REQUESTED = 'UPDATE_REQUESTED';

export const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const UI = { isLoading: false, error: null };

export const uniqueID = () => Math.floor(Math.random() * (16 ** 4));

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const form = {
  id: '',
  title: '',
  category: '',
  author: '',
  chapter: '',
  percentage: '',
};
