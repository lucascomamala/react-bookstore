import Books from './Books';
import AddBook from './AddBook';

const placeHolder = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
  },
];

const BooksPage = () => (
  <>
    <Books books={placeHolder} />
    <AddBook />
  </>
);

export default BooksPage;
