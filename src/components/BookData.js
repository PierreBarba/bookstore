import React from 'react';
import BookItem from './Book';

const BooksInfo = [
  {
    id: 0,
    category: 'Science Fiction',
    title: 'Perfume The Story of a Murderer',
    author: 'Patrick Süskind',
    chapters: 30,
    currentChapter: 22,
  },
  {
    id: 1,
    category: 'Science Fiction',
    title: 'The Slave: A spiritual manifesto for a better way of life',
    author: 'Anan Dilvar',
    chapters: 23,
    currentChapter: 2,
  },
  {
    id: 2,
    category: 'Adventure',
    title: 'Don Quixote of La Mancha',
    author: 'Miguel de Cervantes',
    chapters: 25,
    currentChapter: 15,
  }];

const BookData = () => (

  <ul>
    {BooksInfo.map((book) => {
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

export default BookData;
