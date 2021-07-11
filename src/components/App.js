import '../assets/App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div className="container-fluid app">
      <BooksList />
      <BooksForm />
    </div>
  );
}
