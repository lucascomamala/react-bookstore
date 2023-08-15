import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { getBooksFromAPI } from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

store.dispatch(getBooksFromAPI());

export default store;
