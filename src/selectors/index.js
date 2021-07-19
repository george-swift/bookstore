import { createSelector } from 'reselect';

export const getBooks = (state) => state.books;

export const getFilterCategory = (state) => state.filter;

export const booksByCategory = createSelector(
  [getBooks, getFilterCategory],
  (books, category) => {
    if (category === 'All') return books;
    const filteredByCategory = books.filter((book) => book.category === category);
    return filteredByCategory.length > 0 ? filteredByCategory : null;
  },
);

export const getPendingUpdate = (state) => {
  const {
    id, title, category, author, chapter, percentage,
  } = state.update.pending;
  return {
    id,
    title,
    category,
    author,
    chapter,
    percentage,
  };
};

export const updateCompleted = (state) => state.update.completed;
