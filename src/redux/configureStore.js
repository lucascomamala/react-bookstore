import { configureStore, combineReducers } from '@reduxjs/toolkit/dist';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(rootReducer);

export default store;
