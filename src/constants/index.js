export const uniqueID = () => Math.floor(Math.random() * (16 ** 4));

export const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const books = [
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
