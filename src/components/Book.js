import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { detachApiBook } from '../redux/books/book';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, category, title, author,
  } = props;

  const onClick = () => {
    dispatch(detachApiBook(id));
  };

  return (

    <li className="BookFormat">
      <h3>{category}</h3>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={onClick} type="button">Remove</button>
    </li>

  );
};

export default BookItem;

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
