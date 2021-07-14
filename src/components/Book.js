import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { randomInt } from '../constants';

const Book = ({ book, removeBook }) => (
  <div className="col-12 book-row">
    <div className="book-name">
      <div className="details">
        <p className="book-category">{book.category}</p>
        <p className="title">{book.title}</p>
        <span className="d-block author" role="button">{book.author || "Author's Placeholder"}</span>
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
          <li className="action"><span className="edit" role="button">Edit</span></li>
        </ul>
      </div>
      <div className="progress-ui">
        <span className="progress-icon"><CircularProgressbar value={`${randomInt(50, 100)}`} text={`${randomInt(50, 100)}`} /></span>
        <p>
          <span className="percent">{`${randomInt(50, 100)}%`}</span>
          <br />
          <span className="completed">Completed</span>
        </p>
      </div>
    </div>
    <span className="divider" />
    <div className="book-chapter">
      <p className="current-chapter">Current Chapter</p>
      <p className="current-lesson">{`Chapter ${randomInt(10, 100)}`}</p>
      <button type="button" className="update-progress">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
