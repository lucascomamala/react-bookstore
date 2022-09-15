import React from "react"
import { Link, NavLink } from 'react-router-dom';


const Navbar = ({ title, routes }) => {


  return (
    <nav className="navbar">
      <Link to="/">{title}</Link>
      <ul>
        {routes.map(({ name, path }) => (
          <li key={path}>
            <NavLink to={path} end>
              {name}
            </NavLink>
          </li>
        )
        )}
      </ul>
    </nav >
  )
};

export default Navbar
