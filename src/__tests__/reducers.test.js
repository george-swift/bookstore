import books from '../reducers/books';
import filter from '../reducers/filter';
import { uniqueID } from '../constants';

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

  test('Should return the initial state by default', () => {
    expect(books(undefined, {})).toStrictEqual([]);
    expect(books(preloadedState, {})).toEqual(preloadedState);
  });

  test('Should handle the create book action', () => {
    const action = {
      type: 'CREATE_BOOK',
      payload: newBook,
    };

    const expectedState = [...preloadedState, newBook];

    expect(books(preloadedState, action)).toEqual(expectedState);
  });

  test('Should handle the remove book action', () => {
    const action = {
      type: 'REMOVE_BOOK',
      payload: {
        bookId: newBook.id,
      },
    };

    const newState = [...preloadedState, newBook];

    expect(books(newState, action)).toEqual(preloadedState);
  });
});

describe('Testing the filter reducer', () => {
  test('Should return All as default category', () => {
    expect(filter(undefined, {})).toMatch('All');
  });

  test('Should change filter category', () => {
    const action = {
      type: 'CHANGE_FILTER',
      payload: 'Biography',
    };

    expect(filter('Learning', action)).toMatch('Biography');
  });
});
