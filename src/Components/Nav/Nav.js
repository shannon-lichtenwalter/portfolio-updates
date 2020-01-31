import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';




function Nav() {
  return (
    <nav>
      <ul className="navBarList">
        <li> <a data-scroll href='/#welcome'>Welcome |</a></li>
        <li><a data-scroll href='/#about'>About Me | </a></li>
        <li><a data-scroll href='/#projects'>Projects | </a></li>
        <li><a data-scroll href='/#contact'>Contact </a></li>
      </ul>
    </nav>
  )
}

export default Nav;