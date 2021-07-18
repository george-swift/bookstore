import { filterByCategory } from '../actions';
import books from '../reducers/books';
import filter from '../reducers/filter';
import {
  getBooks,
  getFilterCategory,
  booksByCategory,
  getPendingUpdate,
} from '../selectors';
import { form, REMOVE_BOOK_SUCCEEDED, uniqueID } from '../constants';

describe('Testing BookStore selectors', () => {
  const state = {
    books: [
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
    ],
    filter: 'All',
    update: {
      pending: form,
    },
  };

  afterEach(() => booksByCategory.resetRecomputations());

  it('should retrieve books from the getBooks selector', () => {
    expect(getBooks(state)).toEqual(state.books);
  });

  it('should retrieve category from the getFilterCategory selector', () => {
    expect(getFilterCategory(state)).toMatch('All');
  });

  it('should return params for books that require updating', () => {
    expect(getPendingUpdate(state)).toStrictEqual(expect.objectContaining({ ...form }));
  });

  it('should return null if no books match a filter category', () => {
    const action = filterByCategory('Biography');
    const updatedFilter = filter(state.filter, action);
    const newState = { ...state, filter: updatedFilter };
    const booksByDefault = booksByCategory(state);

    expect(booksByDefault).toHaveLength(2);

    const newBooks = booksByCategory(newState);

    expect(newBooks).toBeNull();
  });

  it('should recompute state when category filter changes', () => {
    const action = filterByCategory('Learning');
    const updatedFilter = filter(state.filter, action);
    const newState = { ...state, filter: updatedFilter };

    expect(booksByCategory.recomputations()).toEqual(0);
    booksByCategory(state);
    expect(booksByCategory.recomputations()).toEqual(1);
    booksByCategory(newState);
    expect(booksByCategory.recomputations()).toEqual(2);
  });

  it('should recompute state if book state in store changes', () => {
    const action = {
      type: REMOVE_BOOK_SUCCEEDED,
      payload: (state.books[1].id),
    };

    const updatedBooks = books(state.books, action);
    const newState = { ...state, books: updatedBooks };

    expect(booksByCategory.recomputations()).toEqual(0);
    booksByCategory(state);
    expect(booksByCategory.recomputations()).toEqual(1);
    booksByCategory(newState);
    expect(booksByCategory.recomputations()).toEqual(2);
  });

  it('should return a memoized object if store state is unchanged', () => {
    const similarState = { ...state };
    expect(booksByCategory.recomputations()).toEqual(0);
    booksByCategory(state);
    booksByCategory(similarState);
    expect(booksByCategory.recomputations()).toEqual(1);
  });
});
