import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../assets/Sass/App.scss';
import { fetchBooksStarted } from '../actions';
import FlashMessage from '../containers/FlashMessage';
import Header from './Header';
import Home from './Home';
import BookEditor from '../containers/BookEditor';
import NotFound from './NotFound';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksStarted());
  }, []);

  return (
    <Router>
      <div className="app">
        <FlashMessage />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<BookEditor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
