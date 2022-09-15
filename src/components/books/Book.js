const Book = ({ book }) => (
  <>
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
    <div>
      <button type="button">
        Comment
      </button>
      <button type="button">
        Remove
      </button>
      <button type="button">
        Edit
      </button>
    </div>
  </>
);

export default Book;
