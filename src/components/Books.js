import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { everyBook, getData, removeData } from '../redux/books/books';
import Book from './Book';
import Form from './Form';
import 'react-circular-progressbar/dist/styles.css';

const Books = () => {
  const { books, status } = useSelector(everyBook);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(getData());
    }
  }, [status, dispatch]);

  return (
    <div className="flex flex-col py-8">
      <div>
        {status === 'successful' ? (
          Object.entries(books).map((book) => {
            const [id, bookDetails] = book;
            const { title, author, category } = bookDetails[0];
            return (
              <div
                key={id}
                className="w-11/12 lg:w-10/12 mx-auto bg-white shadow border p-6 flex gap-12 rounded-md mb-6"
              >
                <div className="flex flex-col w-1/2">
                  <div className="flex flex-col gap-1">
                    <div className="text-gray-400 text-base capitalize font-bold">
                      {category}
                    </div>
                    <Book info={{ title, author }} />
                  </div>
                  <ul className="flex gap-1 lg:gap-4 items-center w-8/12 lg:w-full">
                    <li>
                      <button type="button" className="text-sm font-thin text-blue-500 opacity-90">
                        Comments
                      </button>
                    </li>
                    <li className="w-2 text-gray-300">|</li>
                    <li>
                      <button
                        type="button"
                        className="text-sm font-thin text-blue-500 opacity-90"
                        onClick={() => dispatch(removeData(id))}
                      >
                        Remove
                      </button>
                    </li>
                    <li className="w-2 text-gray-300">|</li>
                    <li>
                      <button type="button" className="text-sm font-thin text-blue-500 opacity-90">
                        Edit
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="w-2/3 flex gap-5 flex justify-evenly">
                  {/* Book Status */}
                  <div className="block lg:flex gap-4 justify-center items-center w-1/3">
                    <div className="circular flex justify-center items-center w-1/2">
                      <CircularProgressbar value="35" strokeWidth={7} />
                    </div>
                    <div className="block mx-auto w-1/2 lg:mx-0">
                      <p className="text-3xl text-center font-normal lg:text-left">63%</p>
                      <span className="text-gray-400 font-normal text-center lg:text-right capitalize">
                        completed
                      </span>
                    </div>
                  </div>
                  {/* Book progress */}
                  <div className="border gap-16" />
                  <div className="flex flex-col gap-4 w-1/3">
                    <span className="text-gray-400 uppercase font-thin tracking-wide">
                      Current Chapter
                    </span>
                    <p className="font-normal">Introduction</p>
                    <button
                      type="button"
                      className="bg-blue-500 opacity-90 uppercase text-xs lg:text-base font-thin p-2 text-white w-full lg:w-10/12"
                    >
                      update progress
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-white, text-center">
            Kindly add books to be displayed them here!
          </p>
        )}
      </div>
      <Form />
    </div>
  );
};

export default Books;
