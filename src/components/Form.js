import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addData } from '../redux/books/books';

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
  const dispatch = useDispatch();

  const initialLocalState = { title: '', author: '' };

  const [formData, setFormData] = useState(initialLocalState);

  const addNewBook = () => {
    if (formData.title.trim() && formData.author.trim()) {
      const newBook = {
        item_id: uuidv4(),
        title: formData.title,
        author: formData.author,
        category: generateCategory(),
      };
      dispatch(addData(newBook));
    }
    setFormData(initialLocalState);
  };

  const onChange = (e) => {
    setFormData((previousState) => {
      const { name, value } = e.target;
      return {
        ...previousState,
        [name]: value,
      };
    });
  };

  return (
    <form
      action="#"
      className="pt-16 w-10/12 mx-auto border-t border-t-gray-300 "
    >
      <span className="text-xl font-bold text-gray-400 block uppercase">
        add new book
      </span>
      <input
        className="w-5/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        name="title"
        type="text"
        placeholder="Book title"
        onChange={onChange}
        required
      />
      <input
        className="w-4/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        placeholder="Book author"
        type="text"
        name="author"
        onChange={onChange}
        required
      />
      <button
        type="button"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
        name="author"
        onClick={() => addNewBook()}
      >
        ADD BOOK
      </button>
    </form>
  );
};

export default Form;
