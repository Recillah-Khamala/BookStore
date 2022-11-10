import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'title') setTitle(value);
    else if (name === 'author') setAuthor(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4,
      title,
      author,
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
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
        placeholder="Book title"
        type="text"
        name="title"
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
        type="submit"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
        onSubmit={submitHandler}
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default Form;
