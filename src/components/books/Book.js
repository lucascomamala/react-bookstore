import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromAPI } from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBookFromAPI(book.id));
  };

  return (
    <>
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <div>
        <button type="button">
          Comment
        </button>
        <button type="button" onClick={removeBookFromStore}>
          Remove
        </button>
        <button type="button">
          Edit
        </button>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
