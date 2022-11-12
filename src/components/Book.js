import React from 'react';

const Book = (data) => {
  const { info } = data;
  const { title, author, category } = info;

  return (
    <div className="flex flex-col">
      <h4 className="text-slate-300 text-base">{category}</h4>
      <h2 className="text-2xl font-bold text-zinc-800 capitalize">
        {title}
      </h2>
      <h6 className="text-blue-500 opacity-80 font-normal capitalize">{author}</h6>
    </div>
  );
};

export default Book;
