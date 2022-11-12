import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="flex justify-between items-center lg:px-24 lg:mx-2 py-5 shadow-sm shadow-gray-200">
    <nav className="flex items-center gap-6 lg:gap-10">
      <h1 className="text-3xl lg:text-4xl text-blue-500 opacity-90 font-bold">
        <Link to="/">Bookstore CMS</Link>
      </h1>
      <ul className="flex gap-8">
        <li>
          <Link to="/" className="font-normal text-sm uppercase tracking-wider">
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className="font-normal opacity-50 text-gray-600 text-sm uppercase tracking-wider"
          >
            Categories
          </Link>
        </li>
      </ul>
    </nav>
    <div className="border p-2 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg "
        height="28px"
        viewBox="0 0 24 24"
        width="28px"
        className="fill-blue-400"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  </header>
);

export default Navigation;
