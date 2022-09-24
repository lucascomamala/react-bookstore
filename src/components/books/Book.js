import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFromAPI } from '../../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookFromStore = () => {
    dispatch(removeBookFromAPI(book.id));
  };

  return (
    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h2 className="book-title">{book.title}</h2>
          <h6 className="book-author">{book.author}</h6>
          <div className="action-buttons">
            <button className="button-outline" type="button">
              Comment
            </button>
            <div className="vertical-divider" />
            <button className="button-outline" type="button" onClick={removeBookFromStore}>
              Remove
            </button>
            <div className="vertical-divider" />
            <button className="button-outline" type="button">
              Edit
            </button>
          </div>
        </div>
        <div className="progress-container">
          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-stat">
            <p className="percent-complete">64%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Chapter 8</p>
            </div>
            <div>
              <button type="button" className="primary-button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
