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
      <nav className="nav">
        <div className="navHeader">
          <h1 className="navTitle">Bookstore CMS</h1>
          <ul className="navList">
            <li className="listItem"><Link className="listLink" to="/"> Books </Link></li>
            <li className="listItem"><Link className="listLink" to="/Pages/Categories">  Categories </Link></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="/Pages/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}
