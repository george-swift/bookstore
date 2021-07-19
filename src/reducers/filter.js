export default function filter(state = 'All', action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return payload;
    default:
      return state;
  }
}
