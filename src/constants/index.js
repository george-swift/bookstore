export const uniqueID = () => Math.floor(Math.random() * (16 ** 4));

export const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const books = [
  {
    id: uniqueID(),
    title: 'The Martian',
    category: 'Sci-Fi',
    author: 'Andy Weir',
  },
  {
    id: uniqueID(),
    title: 'Hands-on Machine Learning',
    category: 'Learning',
    author: 'Aurelien Geron',
  },
  {
    id: uniqueID(),
    title: "Alice's Adventures in Wonderland",
    category: 'Kids',
    author: 'Lewis Caroll',
  },
  {
    id: uniqueID(),
    title: 'The Woman in Black',
    category: 'Horror',
    author: 'Susan Hill',
  },
  {
    id: uniqueID(),
    title: 'Black and British: A Forgotten History',
    category: 'History',
    author: 'David Olusoga',
  },
  {
    id: uniqueID(),
    title: 'Steve Jobs',
    category: 'Biography',
    author: 'Walter Isaacson',
  },
  {
    id: uniqueID(),
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
  },
];

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
