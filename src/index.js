import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { uniqueID } from './constants';
import App from './components/App';

const books = [
  {
    id: uniqueID(),
    title: 'The Martian',
    category: 'Sci-Fi',
  },
  {
    id: uniqueID(),
    title: 'Hands-on Machine Learning',
    category: 'Learning',
  },
  {
    id: uniqueID(),
    title: "Alice's Adventures in Wonderland",
    category: 'Kids',
  },
  {
    id: uniqueID(),
    title: 'The Woman in Black',
    category: 'Horror',
  },
  {
    id: uniqueID(),
    title: 'Black and British: A Forgotten History',
    category: 'History',
  },
  {
    id: uniqueID(),
    title: 'Steve Jobs',
    category: 'Biography',
  },
  {
    id: uniqueID(),
    title: 'The Hunger Games',
    category: 'Action',
  },
];

const initialState = { books };

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
