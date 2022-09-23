import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <ul className="books">
      {books.map((book) => <li key={book.id}><Book book={book} /></li>)}
    </ul>
  );
};

export default Books;
