import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header className="flex justify-between items-center px-10 lg:px-16 py-5 shadow-sm shadow-gray-200">
    <nav className="flex items-center gap-6 lg:gap-8">
      <h1 className="text-3xl lg:text-4xl text-blue-700 font-bold">
        <Link to="/">Bookstore CMS</Link>
      </h1>
      <ul className="flex gap-8">
        <li>
          <Link
            to="/"
            className="font-normal text-sm uppercase tracking-wider"
          >
            Books
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            className="font-light text-gray-600 text-sm uppercase tracking-wider"
          >
            Categories
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
