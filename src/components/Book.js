import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/book';

const BookItem = (props) => {
  const {
    id, category, title, author,
  } = props;

  const dispatch = useDispatch();

  const remove = () => {
    dispatch(deleteBook(id));
  };

  return (

    <li className="BookFormat">
      <h3>{category}</h3>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={remove} type="button" id={id}>Remove</button>
    </li>

  );
};

export default BookItem;

BookItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
