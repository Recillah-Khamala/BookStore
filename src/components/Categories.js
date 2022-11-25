import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { everyCategory, status } from '../redux/categories/categories';

const Categories = () => {
  const selector = useSelector(everyCategory);
  const dispatch = useDispatch();

  const clickHandler = () => {
    const text = 'Under Construction';
    dispatch(status(text));
  };

  return (
    <div className="justify-center flex items-center">
      {selector ? (
        <p className="text-center bg-blue-600 text-white font-semibold capitalize p-4 my-8 round">
          {selector.display}
        </p>
      ) : (
        <button
          type="button"
          className="bg-blue-700 text-white tracking-widest font-normal px-16 py-4 my-12 rounded-lg uppercase"
          onClick={() => clickHandler()}
        >
          Check status
        </button>
      )}
    </div>
  );
};

export default Categories;
