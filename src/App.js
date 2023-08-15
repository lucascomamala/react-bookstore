import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksPage from './components/books/BooksPage';
import Categories from './components/categories/Categories';

const routes = [
  {
    id: 1,
    path: '/',
    name: 'BOOKS',
    component: <BooksPage />,
  },
  {
    id: 2,
    path: '/categories',
    name: 'CATEGORIES',
    component: <Categories />,
  },
];

function App() {
  return (
    <>
      <Navbar title="Bookstore CMS" routes={routes} />
      <div className="container">
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
