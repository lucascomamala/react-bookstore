import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, routes }) => (
  <nav className="navbar">
    <Link to="/">{title}</Link>
    <ul>
      {routes.map(({ name, path }) => (
        <li key={path}>
          <NavLink to={path} end>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Navbar;
