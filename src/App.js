import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { catchApiBook } from './redux/books/book';
import Categories from './pages/Categories';
import BooksPage from './pages/Bookspage';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  dispatch(catchApiBook());
  return (

    <>
      <div id="root">
        <nav className="nav-bar">
          <h1 className="nav-brand">Bookstore CMS</h1>
          <ul className="nav-links">
            <li className="listItem"><Link className="listLink" to="/"> Books </Link></li>
            <li className="listItem"><Link className="listLink" to="/Pages/Categories">  Categories </Link></li>
          </ul>
          <button className="icon-button" type="button">
            <span className="material-icons">person</span>
          </button>
        </nav>

        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/Pages/Categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}
