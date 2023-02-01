const STATUS_INFO = 'bookstore/categories/STATUS_INFO';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS_INFO:
      return [
        ...state, action.payload,
      ];
    default:
      return state;
  }
};

export const checkCategories = () => (
  {
    type: STATUS_INFO,
    payload: 'IN PROGRESS...',
  }
);

export default categoriesReducer;
