import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './Book';

const BookData = () => {
  const bookList = useSelector((state) => state.book);
  return (
    <ul>
      {bookList.map((book) => {
        const {
          id, category, title, author, chapters, currentChapter,
        } = book;
        return (
          <BookItem
            key={id}
            category={category}
            title={title}
            author={author}
            chapters={chapters}
            currentChapter={currentChapter}
          />

        );
      })}
    </ul>
  );
};

export default BookData;
