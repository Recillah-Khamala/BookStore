import React from 'react';

const Form = () => (
  <section className="w-10/12 mx-auto border-t border-t-gray-300 pt-10 ">
    <h2 className="text-xl font-bold text-gray-400 block uppercase">
      add new book
    </h2>
    <form action="#" className="pt-5">
      <input
        className="w-5/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        placeholder="Book title"
        type="text"
        required
      />
      <input
        className="w-4/12 p-2 border rounded mr-4 font-light capitalize tracking-wider"
        placeholder="Book author"
        type="text"
        required
      />
      <button
        type="submit"
        className="py-2 px-14 rounded-md text-sm ml-2 bg-blue-600 text-white uppercase"
      >
        ADD BOOK
      </button>
    </form>
  </section>
);

export default Form;
