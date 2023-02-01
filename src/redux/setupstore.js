import { configureStore } from '@reduxjs/toolkit';

import bookReducer from './books/book';
import categoriesReducer from './categories/categories';

const rootReducer = {
  book: bookReducer,
  categories: categoriesReducer,
};

const store = configureStore({ reducer: rootReducer });

export default store;
