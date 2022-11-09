import { configureStore } from '@reduxjs/toolkit';
import { bookReducers } from './books/books';
import { checkReducers } from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducers,
    category: checkReducers,
  },
});

export default store;
