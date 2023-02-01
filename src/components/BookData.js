import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './Book';

const BookData = () => {
  const bookList = useSelector((state) => state.book);
  return (
    <ul>
      {bookList.map((element) => {
        const {
          id, category, title, author,
        } = element;
        return (
          <BookItem
            key={id}
            id={id}
            category={category}
            title={title}
            author={author}
          />
        );
      })}
    </ul>
  );
};

export default BookData;
