const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state, action.payload,
      ];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export const AddBook = (id, category, title, author) => ({

  type: 'ADD_BOOK',
  payload: {
    id, category, title, author,
  },

});

export const removeBook = (id) => ({

  type: 'REMOVE_BOOK',
  payload: { id },

});

export default bookReducer;
