import React from 'react';
import './Nav.css';




function Nav() {
  return (
    <nav id='nav'>
      <ul className="navBarList">
        <li className='needDivider'> <a data-scroll href='/#welcome'>Welcome</a></li>
        <li className='needDivider'><a data-scroll href='/#about'>About Me</a></li>
        <li className='needDivider'><a data-scroll href='/#projects'>Projects</a></li>
        <li><a data-scroll href='/#contact'>Contact </a></li>
      </ul>
    </nav>
  )
}

export default Nav;