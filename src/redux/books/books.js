/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZxXzbpNGqX1YGQ04jVqp/books';

// const firstState = { books: {}, status: 'idle' };

export const getBook = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const fetchBook = await axios.get(`${URL}`);
      return fetchBook.data;
    } catch (error) {
      return error?.response;
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addbook',
  async (firstState) => {
    try {
      const postBook = await axios.post(`${URL}`, firstState);
      if (postBook.data === 'Created') {
        const newBook = await axios.get(URL);
        return newBook.data;
      }
    } catch (error) {
      return error?.response;
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id) => {
    try {
      const response = await axios.delete(`${URL}/${id}`);
      if (response.data === 'The book was deleted successfully!') {
        const res = await axios.get(URL);
        return res.data;
      }
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

export const everyBook = (state) => state.books;

export default bookSlice.reducer;
