import axios from 'axios';

const API_BASE_URL = 'https://redux-api-bookstore.herokuapp.com';

const client = axios.create({ baseURL: API_BASE_URL });

export const fetchBooks = () => client.get('/books');

export const createBook = (params) => client.post('/books', params);

export const editBook = (id, params) => client.put(`${API_BASE_URL}/books/${id}`, params);

export const deleteBook = (id) => client.delete(`${API_BASE_URL}/books/${id}`);
