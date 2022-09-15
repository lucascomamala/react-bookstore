import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/books/BooksPage';
import Categories from './components/categories/Categories';
import './App.css';

const routes = [
  {
    id: 1,
    path: '/',
    name: 'Books',
    component: <Books />,
  },
  {
    id: 2,
    path: '/categories',
    name: 'Categories',
    component: <Categories />,
  },
];

function App() {
  return (
    <>
      <Navbar title="Bookstore CMS" routes={routes} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
