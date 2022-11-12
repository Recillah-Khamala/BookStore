import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addData } from '../redux/books/books';
import Set from './Sticker';

const Form = () => {
  const generateCategory = () => {
    const categories = [
      'Action',
      'Drama',
      'Fiction',
      'Economy',
      'Science Fiction',
      'Money',
    ];
    const randomInd = Math.floor(Math.random() * 6);
    return categories[randomInd];
  };

  const { values, onChange, setValues } = Set();
  const dispatch = useDispatch();

  const initialLocalState = { title: '', author: '' };

  const { title, author } = values;
  const onSubmit = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: generateCategory(),
    };
    dispatch(addData(newBook));
    setValues(initialLocalState);
  };

  return (
    <form
      action="#"
      className="pt-8 mt-5 w-10/12 mx-auto border-t border-t-gray-300 "
    >
      <span className="text-xl font-bold text-gray-400 block uppercase mb-4">
        add new book
      </span>
      <input
        className="w-5/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        name="title"
        type="text"
        value={title}
        placeholder="Book title"
        onChange={(e) => onChange(e)}
        required
      />
      <input
        className="w-4/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        placeholder="Book author"
        type="text"
        value={author}
        name="author"
        onChange={(e) => onChange(e)}
        required
      />
      <button
        type="button"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
        onClick={onSubmit}
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default Form;
