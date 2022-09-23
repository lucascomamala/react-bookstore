import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" id="form-title" placeholder="Book title" value={title} onChange={onTitleChange} />
        <input type="text" id="form-author" placeholder="Book author" value={author} onChange={onAuthorChange} />
        <button type="submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBook;
