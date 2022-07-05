import "../styles/header.css";
import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>Judul Header</h1>
      <nav>
        <a href="#" className="navlist">Home</a>
        <a href="#" className="navlist">Project</a>
        <a href="#" className="navlist">Contact Us</a>
        <a href="#" className="navlist">About</a>
      </nav>
    </header>
  );
}

export default Header;