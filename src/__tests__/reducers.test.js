import {
  uniqueID,
  UI,
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_SUCCEEDED,
  CREATE_BOOK_SUCCEEDED,
  CREATE_BOOK_FAILED,
  EDIT_BOOK_SUCCEEDED,
  REMOVE_BOOK_SUCCEEDED,
  CHANGE_FILTER,
  UPDATE_REQUESTED,
  form,
} from '../constants';
import books from '../reducers/books';
import filter from '../reducers/filter';
import notifications from '../reducers/notifications';
import update from '../reducers/updates';

describe('Testing the books reducer', () => {
  const preloadedState = [
    {
      id: uniqueID(),
      title: "Ender's game",
      category: 'Sci-Fi',
    },
    {
      id: uniqueID(),
      title: 'Make it Stick',
      category: 'Learning',
    },
  ];

  const newBook = {
    id: uniqueID(),
    title: 'Test book',
    category: 'Action',
  };

  test('should return the initial state by default', () => {
    expect(books(undefined, {})).toStrictEqual([]);
    expect(books(preloadedState, {})).toEqual(preloadedState);
  });

  test('should handle successful fetch books action', () => {
    const action = {
      type: FETCH_BOOKS_SUCCEEDED,
      payload: preloadedState,
    };

    expect(books([], action)).toStrictEqual(expect.arrayContaining([...preloadedState]));
  });

  test('should handle successful create book action', () => {
    const action = {
      type: CREATE_BOOK_SUCCEEDED,
      payload: newBook,
    };

    const expectedState = [...preloadedState, newBook];

    expect(books(preloadedState, action)).toEqual(expectedState);
  });

  test('should handle successful edit book action', () => {
    const state = [...preloadedState];
    state[0].id = 11;
    state[1].id = 27;

    const editedBook = { id: 11, title: 'Harry Potter', category: 'Action' };

    const action = {
      type: EDIT_BOOK_SUCCEEDED,
      payload: editedBook,
    };

    expect(books(state, action)).toStrictEqual(
      expect.arrayContaining([state[1], editedBook]),
    );
  });

  test('should handle successful remove book action', () => {
    const action = {
      type: REMOVE_BOOK_SUCCEEDED,
      payload: {
        bookId: newBook.id,
      },
    };

    const newState = [...preloadedState, newBook];

    expect(books(newState, action)).toEqual(preloadedState);
  });
});

describe('Testing the filter reducer', () => {
  test('should return All as default category', () => {
    expect(filter(undefined, {})).toMatch('All');
  });

  test('Should change filter category', () => {
    const action = {
      type: CHANGE_FILTER,
      payload: 'Biography',
    };

    expect(filter('Learning', action)).toMatch('Biography');
  });
});

describe('Testing the notifications reducer', () => {
  test('should load a spinner on the page while fecthing data', () => {
    const action = { type: FETCH_BOOKS_STARTED };
    expect(notifications(UI, action)).toStrictEqual(expect.objectContaining({
      ...UI,
      isLoading: true,
      error: null,
    }));
  });

  test('should provide an error on failure action', () => {
    const action = {
      type: CREATE_BOOK_FAILED,
      payload: {
        error: 'Test error message',
      },
    };
    expect(notifications(UI, action)).toStrictEqual(expect.objectContaining({
      ...UI,
      isLoading: false,
      error: 'Test error message',
    }));
  });

  test('should handle when a book is deleted', () => {
    const action = { type: REMOVE_BOOK_SUCCEEDED };
    expect(notifications(UI, action)).toStrictEqual(expect.objectContaining({ ...UI }));
  });
});

describe('Testing the updates reducer', () => {
  const newBook = {
    id: uniqueID(),
    title: 'Test book',
    category: 'Action',
  };

  const action = {
    type: UPDATE_REQUESTED,
    payload: newBook,
  };

  test('should return a default object with pending and complete properties', () => {
    expect(update(undefined, {})).toStrictEqual(expect.objectContaining({
      pending: form,
      completed: false,
    }));
  });

  test('should handle a pending update', () => {
    expect(update(undefined, action)).toStrictEqual(expect.objectContaining({
      pending: {
        ...form,
        ...newBook,
      },
      completed: false,
    }));
  });

  test('should handle a successful updates', () => {
    const action = { type: EDIT_BOOK_SUCCEEDED };
    expect(update(undefined, action)).toStrictEqual(expect.objectContaining({
      pending: form,
      completed: true,
    }));
  });
});
