import { useSelector, useDispatch } from 'react-redux';
import { checkStatusBook } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatusBook());
  };
  const status = useSelector((state) => state.categories);

  return (
    <>
      <button type="button" onClick={handleStatus}>Check status</button>
      <h2>{status}</h2>
    </>
  );
};

export default Categories;
