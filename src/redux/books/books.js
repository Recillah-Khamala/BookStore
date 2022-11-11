/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZxXzbpNGqX1YGQ04jVqp/books';

// const initialState = { books: {}, status: 'idle' };

export const getData = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const fetchData = await axios.get(`${URL}`);
      return fetchData.data;
    } catch (error) {
      return error?.response;
    }
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState: [],

  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export const everyBook = (state) => state.books;

export default bookSlice.reducer;
