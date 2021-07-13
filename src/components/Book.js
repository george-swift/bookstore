import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <tr>
    <th scope="row">{book.id}</th>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button
        type="button"
        className="btn btn-warning btn-sm"
        onClick={() => removeBook(book)}
      >
        Remove Book
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
