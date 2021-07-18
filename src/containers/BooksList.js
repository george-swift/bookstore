/* eslint-disable import/no-extraneous-dependencies */
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { removeBookRequested, filterByCategory, updateRequested } from '../actions';
import { booksByCategory } from '../selectors';
import CategoryFilter from '../components/CategoryFilter';
import Spinner from '../components/Spinner';
import Book from '../components/Book';

export default function BooksList() {
  const { isLoading } = useSelector((state) => state.notifications);
  const books = useSelector((state) => booksByCategory(state));
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => dispatch(removeBookRequested(book));
  const handleFilterChange = (filter) => dispatch(filterByCategory(filter));
  const handleEditBook = (book) => dispatch(updateRequested(book));

  return (
    <div className="container-fluid bookslist">
      <div className="d-flex align-items-center">
        <CategoryFilter filterCategory={handleFilterChange} />
        <Spinner loading={isLoading} />
      </div>

      <div className="row">
        {
          books?.map((book) => (
            <Book
              key={v4()}
              book={book}
              editBook={handleEditBook}
              removeBook={handleRemoveBook}
            />
          ))
            ?? (<div className="col-12"><p>No available books in this category</p></div>)
          }
      </div>
      <hr className="section-divider" />
    </div>
  );
}
