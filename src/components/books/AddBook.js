import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../../redux/books/books';

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
    dispatch(addBookToAPI(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input className="input title-input" id="title-input" placeholder="Book title" required value={title} onChange={onTitleChange} />
        <input className="input author-input" id="author-input" placeholder="Book author" required value={author} onChange={onAuthorChange} />
        <button type="submit" className="primary-button-big" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </section>
  );
};

export default AddBook;
