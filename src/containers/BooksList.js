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
    <div className="container-fluid bookslist">
      <CategoryFilter filterCategory={handleFilterChange} />
      <div className="row">
        {
          books?.map((book) => (
            <Book key={book.id} book={book} removeBook={handleRemoveBook} />))
            ?? (<div className="col-12"><p>No available books in this category</p></div>)
          }
      </div>
      <hr id="section-divider" />
    </div>
  );
}
