import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { attachApiBook } from '../redux/books/book';

const BookForm = () => {
  const dispatch = useDispatch();
  const [bookInfo, setbookInfo] = useState(
    {
      title: '',
      author: '',
    },
  );

  const onChange = (event) => {
    setbookInfo({
      ...bookInfo,
      [event.target.name]: event.target.value,
    });
  };

  const submitEvent = (event) => {
    event.preventDefault();
    dispatch(attachApiBook({
      ...bookInfo,
      item_id: uuidv4(),
      category: 'romance',
      id: uuidv4(),
    }));

    setbookInfo({
      title: '',
      author: '',
    });
  };

  return (
    <>
      <div className="formContainer">
        <h2 className="formtitle">ADD NEW BOOK</h2>
        <form onSubmit={submitEvent} className="form">
          <input className="input-title" name="title" value={bookInfo.title} onChange={onChange} type="text" placeholder="Book title" required />
          <input className="input-author" name="author" value={bookInfo.author} onChange={onChange} type="text" placeholder="Author" required />
          <button type="submit" className="AdBtn"> Add Book </button>
        </form>
      </div>
    </>
  );
};

export default BookForm;
