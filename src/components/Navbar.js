import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, routes }) => (
  <nav className="navbar">
    <Link className="nav-brand" to="/">{title}</Link>
    <ul className="nav-links">
      {routes.map(({ name, path }) => (
        <li key={path}>
          <NavLink className="nav-link" to={path} end>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
    <button className="icon-button" type="button"><span className="material-icons primary-color">person</span></button>
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
