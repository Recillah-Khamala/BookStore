import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Store from './redux/configureStore';
import Books from './components/Books';
import Categories from './components/Categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route element={<App />} path="/">
            <Route element={<Books />} path="/" />
            <Route element={<Categories />} path="/Categories" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
);
