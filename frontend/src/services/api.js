import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchBooks = () => api.get('/books');
export const createBook = (bookData) => api.post('/books/create', bookData);
export const deleteBook = (id) => api.delete(`/books/delete`, { data: { id } });

export const fetchOwners = () => api.get('/owners');
export const createOwner = (ownerData) => api.post('/owners/create', ownerData);

export const fetchUsers = () => api.get('/users');
export const createUser = (userData) => api.post('/users/create', userData);
