import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
    },
    {
      id: uuidv4(),
      title: 'The Most Human Human',
      author: 'Brian Christian',
    },
    {
      id: uuidv4(),
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
    },
  ],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case REMOVE_BOOK:
      return { ...state, books: state.books.filter((book) => book.id !== action.payload) };
    default:
      return state;
  }
};

export default booksReducer;
