import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';




function Nav() {
  return (
    <nav>
      <ul className="navBarList">
        <li> <Link to='/'>Welcome |</Link></li>
        <li><Link to='/about'>About Me | </Link></li>
        <li><Link to='/projects'>Projects | </Link></li>
        <li><Link to='/contact'>Contact </Link></li>
      </ul>
    </nav>
  )
}

export default Nav;