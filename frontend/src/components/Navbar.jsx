import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Roshan's Portfolio</h2>

      <button className="hamburger" onClick={toggleMenu}>
        <span className={`hamburger-line ${isOpen ? "active" : ""}`}></span>
        <span className={`hamburger-line ${isOpen ? "active" : ""}`}></span>
        <span className={`hamburger-line ${isOpen ? "active" : ""}`}></span>
      </button>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;