import { useSelector, useDispatch } from 'react-redux';
import { checkCategories } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(checkCategories('under construction'));
  };

  return (
    <>
      <h1>
        { status}
        {' '}
      </h1>
      <button
        type="button"
        className="statusBtn"
        onClick={onClick}
      >
        checkStatus
      </button>
    </>
  );
};

export default Categories;
