import React, { useState } from 'react';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import logo from '../file.svg'
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="#home" className="navbar-logo">
            <img src={logo} className='logo' alt='logo'/>
          </a>

          <div className="navbar-menu">
            <a href="#about">
              About Us <ChevronDown size={16} />
            </a>
            <a href="#practice">Practice Areas</a>
            <a href="#industries">Industries</a>
            <a href="#people">Our People</a>
            <a href="#careers">
              Careers <ChevronDown size={16} />
            </a>
            <a href="#academics">Academics</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="navbar-actions">
            <button onClick={() => setShowSearch(!showSearch)} className="navbar-search-btn">
              <Search size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="navbar-mobile-toggle">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {showSearch && (
          <input
            type="text"
            placeholder="Search..."
            className="navbar-search-input"
          />
        )}

        {isOpen && (
          <div className="navbar-mobile-menu">
            <a href="#about">About Us</a>
            <a href="#practice">Practice Areas</a>
            <a href="#industries">Industries</a>
            <a href="#people">Our People</a>
            <a href="#careers">Careers</a>
            <a href="#academics">Academics</a>
            <a href="#contact">Contact Us</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
