import { useSelector, useDispatch } from 'react-redux';
import { checkStatusBook } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatusBook());
  };
  const status = useSelector((state) => state.categories);

  return (
    <div className="categories-container">
      <button className="primary-button-big" type="button" onClick={handleStatus}>Check status</button>
      <h2 className="categories-message">{status}</h2>
    </div>
  );
};

export default Categories;
