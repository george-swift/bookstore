import '../assets/Sass/App.scss';
import Header from './Header';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

export default function App() {
  return (
    <div className="app">
      <Header />
      <BooksList />
      <BooksForm />
    </div>
  );
}
