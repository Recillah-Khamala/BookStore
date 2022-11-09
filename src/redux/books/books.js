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
