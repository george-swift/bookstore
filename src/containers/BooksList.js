import { useSelector, useDispatch } from 'react-redux';
import { removeBook, filterByCategory } from '../actions';
import { booksByCategory } from '../selectors';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';

export default function BooksList() {
  const books = useSelector((state) => booksByCategory(state));
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => dispatch(removeBook(book));
  const handleFilterChange = (filter) => dispatch(filterByCategory(filter));

  return (
    <div className="container bookslist">
      <CategoryFilter filterCategory={handleFilterChange} />
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
            books?.map((book) => <Book key={book.id} book={book} removeBook={handleRemoveBook} />)
            ?? (
              <tr>
                <th scope="row">n/a</th>
                <td colSpan="4">No available books in this category</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
