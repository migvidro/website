import React from 'react';
import './Header.css'; // For styling (optional)
import { Link } from 'react-scroll';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
