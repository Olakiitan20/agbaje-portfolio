import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          AGBAJE
        </a>

        <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setIsMenuOpen(false)}>
            Projects
          </a>

          <a href="#design" onClick={() => setIsMenuOpen(false)}>
            Design
          </a>

          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>

          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;