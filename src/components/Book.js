import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const {
    id, category, title, author,
  } = props;

  return (

    <li className="BookFormat">
      <h3>{category}</h3>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" id={id}>Remove</button>
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
