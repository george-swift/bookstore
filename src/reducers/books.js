export default function books(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return [...state, payload];

    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== payload.bookId);

    default:
      return state;
  }
}
