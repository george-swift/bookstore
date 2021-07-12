import { useSelector } from 'react-redux';
import Book from '../components/Book';

export default function BooksList() {
  const books = useSelector((state) => state.books);

  return (
    <div className="container bg-light">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Book ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <Book key={book.id} book={book} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
