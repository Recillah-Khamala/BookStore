import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: uuidv4(),
      title: 'The Smart parent',
      aythor: 'Nancy Van Pelt',
    },
    {
      id: uuidv4(),
      title: 'Choose Your Hard',
      aythor: 'Recillah Khamala',
    },
    {
      id: uuidv4(),
      title: 'The hunger games',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ],

  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) =>
      state.filter((book) => book.id === !action.payload),
  },
});

export default bookSlice.reducer;
