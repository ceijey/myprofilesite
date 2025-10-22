'use client';
import { useState, useEffect } from 'react';

export default function Navigation({ activePage, setActivePage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="nav-brand">My Landing Page</div>
      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <button 
            className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activePage === 'education' ? 'active' : ''}`}
            onClick={() => handleNavClick('education')}
          >
            Education
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activePage === 'skills' ? 'active' : ''}`}
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={`nav-link ${activePage === 'social' ? 'active' : ''}`}
            onClick={() => handleNavClick('social')}
          >
            Social & Sports
          </button>
        </li>
      </ul>
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}