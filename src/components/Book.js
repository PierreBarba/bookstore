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
    <>
      <div className="container">
        <ul className="books">
          <li>
            <div className="book">
              <div className="book-content">
                <div className="book-info">
                  <h3 className="book-category">{category}</h3>
                  <h2 className="book-title">{title}</h2>
                  <h3 className="book-author">{author}</h3>
                  <div className="action-buttons">
                    <button className="button-outline" type="button"> comment </button>
                    <div className="vertical-divider" />
                    <button className="button-outline" onClick={onClick} type="button">Remove</button>
                    <div className="vertical-divider" />
                    <button className="button-outline" type="button"> edit </button>
                  </div>
                </div>
                <div className="progress-container">
                  <div className="circular-progress-container">
                    <div className="circular-progress" />
                  </div>
                </div>
                <div className="progress-stat">
                  <p className="percent-complete">75%</p>
                  <p className="completed">completed</p>
                </div>
                <div className="progress-divider" />
                <div className="current-chapter-container ">
                  <div>
                    <p className="current-chapter-label"> CURRENT CHAPTER </p>
                    <p className="current-chapter">chapter 14</p>
                  </div>
                  <div>
                    <button className="primary-button" type="button">UPDATE PROGRESS</button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BookItem;

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
