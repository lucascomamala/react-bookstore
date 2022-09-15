import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

const routes = [
  {
    id: 1,
    path: "/",
    name: "Books",
    component: <Books />,
  },
  {
    id: 2,
    path: "/categories",
    name: "Categories",
    component: <Categories />,
  },
];

function App() {
  return (
    <>
      <Navbar title="Bookstore CMS" routes={routes} />
      <div className="container">
        <Routes>
          {routes.map(({ path, component }) => (
            <Route path={path} key={path} element={component} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
