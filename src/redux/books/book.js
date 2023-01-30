const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_BOOK':
      return [
        ...state, action.payload,
      ];
    case 'DELETE_BOOK':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export const newBook = (id, category, title, author) => ({

  type: 'NEW_BOOK',
  payload: {
    id, category, title, author,
  },

});

export const deletBook = (id) => ({

  type: 'DELETE_BOOK',
  payload: { id },

});

export default bookReducer;
