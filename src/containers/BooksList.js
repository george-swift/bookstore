import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../actions';
import Book from '../components/Book';

export default function BooksList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => dispatch(removeBook(book));

  return (
    <div className="container bg-light table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <Book key={book.id} book={book} removeBook={handleRemoveBook} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
