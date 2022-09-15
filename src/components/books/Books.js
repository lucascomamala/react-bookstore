import React from 'react';
import Book from './Book.js';

const Books = ({ books }) => (
  <ul className="books">{books.map((book) => <li key={book.title}><Book book={book} /></li>)}</ul>
);

export default Books;
