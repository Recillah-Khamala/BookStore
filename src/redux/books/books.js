export const { addBook, removeBook } = books.actions;

initialState = [];

const AddBook = (book) => ({
  type: addBook,
  book,
});

const RemoveBook = (book) => ({
  type: removeBook,
  id,
});

export const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return [...state, action.book];
    case removeBook:
      return state.filter((book) => book.id === !action.id);
    default:
      return state;
  }
};

export default { bookReducers, AddBook, RemoveBook}