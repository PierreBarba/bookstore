import React from 'react';

const BookForm = () => (

  <div>
    <form className="form">
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Author" required />
      <button type="submit" className="AdBtn"> Add Book </button>
    </form>
  </div>

);

export default BookForm;
