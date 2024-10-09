import React from 'react';
import '../styles/Header.css'
import { Link } from 'react-scroll';


const Header: React.FC = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='about'>About me</Link>
          </li>
          <li className='nav-item'>
            <Link to='experience'>Experience</Link>
          </li>
          <li className='nav-item'>
            <Link to='contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
