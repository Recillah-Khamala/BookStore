import React from 'react';

const Book = (data) => {
  const { info } = data;
  const { title, author } = info;

  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-xl font-semibold tracking-wider capitalize">
        {title}
      </h2>
      <h6 className="text-blue-700 font-normal capitalize">{author}</h6>
    </div>
  );
};

export default Book;
