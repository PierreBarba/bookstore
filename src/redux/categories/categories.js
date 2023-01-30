const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return [
        ...state, action.payload,
      ];
    default:
      return state;
  }
};

export const checkCategories = () => (
  {
    type: 'CHECK_STATUS',
    payload: 'Under construction',
  }
);

export default categoriesReducer;
