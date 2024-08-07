import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
  return (
    <header>
      <h1>Users</h1>
      <nav>
        <Link to="/">Page 1</Link> | <Link to="/page/2">Page 2</Link>
      </nav>
    </header>
  );
};

export default Header;