import { configureStore } from '@reduxjs/toolkit';
import { bookReducers } from './books/books';
import { checkReducers } from './categories/categories';

const Store = configureStore({
  reducer: {
    books: bookReducers,
    category: checkReducers,
  },
});

export default Store;
