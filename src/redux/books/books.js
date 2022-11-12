/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZxXzbpNGqX1YGQ04jVqp/books';

const initialState = { books: {}, status: 'idle' };

export const getData = createAsyncThunk('books/getBooks', async () => {
  try {
    const initialState = await axios.get(`${URL}`);
    return initialState.data;
  } catch (error) {
    return error?.response;
  }
});

export const addData = createAsyncThunk('books/addbook', async (firstState) => {
  try {
    const postData = await axios.post(`${URL}`, firstState);
    if (postData.data === 'Created') {
      const newData = await axios.get(URL);
      return newData.data;
    }
  } catch (error) {
    return error?.response;
  }
});

export const removeData = createAsyncThunk('books/removeBook', async (id) => {
  try {
    const response = await axios.delete(`${URL}/${id}`);
    if (response.data === 'The book was deleted successfully!') {
      const res = await axios.get(URL);
      return res.data;
    }
  } catch (error) {
    return error?.response;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state) => {
        const st = state;
        st.status = 'pending';
      })
      .addCase(getData.fulfilled, (state, action) => {
        const st = state;
        st.status = 'Successful';
        st.books = action.payload;
      })
      .addCase(addData.fulfilled, (state, action) => {
        const st = state;
        st.status = 'Successful';
        st.books = action.payload;
      })
      .addCase(removeData.fulfilled, (state, action) => {
        const st = state;
        st.status = 'Successful';
        st.books = action.payload;
      });
  },
});

export const everyBook = (state) => state.books;

export default bookSlice.reducer;
