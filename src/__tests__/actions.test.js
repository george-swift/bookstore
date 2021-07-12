import { createBook, removeBook } from "../actions";
import { uniqueID } from '../constants';

describe('Testing action creators', () => {
  const book = {
    id: uniqueID(),
    title: 'Test book',
    category: 'Learning'
  };

  test('Should create book on submit', () => {
    const expectedAction = {
      type: 'CREATE_BOOK',
      payload: book
    };

    expect(createBook(book)).toEqual(expectedAction);
  });

  test('Should remove book on submit', () => {
    const expectedAction = {
      type: 'REMOVE_BOOK',
      payload: {
        bookId: book.id
      }
    };

    expect(removeBook(book)).toEqual(expectedAction);
  });
})