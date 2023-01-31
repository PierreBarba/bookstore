const NEW_BOOK = 'bookstore/books/NEW_BOOK';
const DELETE_BOOK = 'bookstore/books/DELETE_BOOK';

const startBooks = [
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

const bookReducer = (state = startBooks, action) => {
  switch (action.type) {
    case NEW_BOOK:
      return [
        ...state, action.payload,
      ];
    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export const newBook = (Element) => ({

  type: NEW_BOOK,
  payload: Element,

});

export const deleteBook = (id) => ({

  type: DELETE_BOOK,
  payload: id,

});

export default bookReducer;
