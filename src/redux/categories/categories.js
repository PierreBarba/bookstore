const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STATUS_INFO':
      return [
        ...state, action.payload,
      ];
    default:
      return state;
  }
};

export const checkCategories = () => (
  {
    type: 'ESTATUS_INFO',
    payload: 'IN PROGRESS...',
  }
);

export default categoriesReducer;
