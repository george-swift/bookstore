import { call } from '@redux-saga/core/effects';
import { FETCH_BOOKS_STARTED } from '../constants';
import * as api from '../api';
import * as sagas from '../sagas/sagas';

describe('Testing sagas', () => {
  test('should handle the fetchBooks action', () => {
    const iterator = sagas.fetchBooks({
      type: FETCH_BOOKS_STARTED,
    });
    expect(iterator.next().value).toEqual(call(api.fetchBooks));
    expect(iterator.next().done).toBe(false);
    iterator.next();
    expect(iterator.next().done).toBe(true);
  });

  test('should handle the createBook action', () => {
    const book = { title: 'T', category: 'Demo' };
    const iterator = sagas.createBook({ ...book });
    iterator.next();
    expect(iterator.next().done).toBe(false);
    expect(iterator.next().done).toBe(true);
  });
});
