const addBook = 'redux/books/book/addBook';
const removeBook = 'redux/books/book/removeBook';

const initialState = [];

const AddBook = (book) => ({
  type: addBook,
  book,
});

const RemoveBook = (id) => ({
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

export default { bookReducers, AddBook, RemoveBook };
