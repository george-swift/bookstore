import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const Book = ({ book, editBook, removeBook }) => (
  <div className="col-12 d-flex book-row">
    <div className="book-name">
      <div className="details">
        <p className="book-category">{book.category}</p>
        <p className="title">{book.title}</p>
        <span className="d-block author">{book.author || 'Click Edit to add author'}</span>
        <ul>
          <li className="action border-end"><span className="comments" role="button">Comments</span></li>
          <li className="action border-end">
            <button
              type="button"
              className="remove"
              onClick={() => removeBook(book)}
              title="Click to remove book from store"
            >
              Remove
            </button>
          </li>
          <li className="action">
            <Link to="/edit" className="edit" onClick={() => editBook(book)}>Edit</Link>
          </li>
        </ul>
      </div>
      <div className="progress-ui">
        <span className="progress-icon">
          <CircularProgressbar value={book.percentage || 0} />
        </span>
        <p>
          <span className="percent">{`${book.percentage || 0}%`}</span>
          <br />
          <span className="completed">Completed</span>
        </p>
      </div>
    </div>
    <span className="divider" />
    <div className="book-chapter">
      <p className="current-chapter">Current Chapter</p>
      <p className="current-lesson">{`Chapter ${book.chapter || 0}`}</p>
      <Link to="/edit" className="btn btn-sm update-progress" onClick={() => editBook(book)}>
        Update Progress
      </Link>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string,
    percentage: PropTypes.number,
    chapter: PropTypes.number,
  }).isRequired,
  editBook: PropTypes.func.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
