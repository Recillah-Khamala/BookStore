import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import Set from './Sticker';

const Form = () => {
  const { values, onChange } = Set();
  const dispatch = useDispatch();

  const { title, author } = values;
  const onSubmit = () => {
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
  };

  return (
    <form
      action="#"
      className="pt-6 w-10/12 mx-auto border-t border-t-gray-300 pt-10 "
    >
      <span className="text-xl font-bold text-gray-400 block uppercase">
        add new book
      </span>
      <input
        className="w-5/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        name="title"
        type="text"
        placeholder="Book title"
        onChange={(e) => onChange(e)}
        required
      />
      <input
        className="w-4/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        placeholder="Book author"
        type="text"
        name="author"
        onChange={(e) => onChange(e)}
        required
      />
      <button
        type="button"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
        name="author"
        onClick={onSubmit}
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default Form;
