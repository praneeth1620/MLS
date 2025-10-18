import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import b_1 from "../b_1.png";
import {  useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [closeTimeout, setCloseTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsAcademicsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setIsAcademicsOpen(false), 300);
    setCloseTimeout(timeout);
  };

  return (
    <nav
      className={`navbar ${isDarkTheme ? "dark-theme" : "light-theme"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="#home" className="navbar-logo" onClick={() => navigate('/')}>
            <img src={b_1} className="logo" alt="logo" />
            <div className="logoname">
              <p className="first">MLS & Co</p>
              <p className="last">LAW FIRM</p>
            </div>
          </a>

          <div className="navbar-menu">
            <a href="#about">About Us</a>
            <a href="#practice">Practice Areas</a>
            <a href="#people">Our People</a>
            <Link to="/careers">Careers</Link>

            <div
              className="navbar-dropdown"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="navbar-dropdown-btn">
                Academics <ChevronDown size={16} />
              </button>
              {isAcademicsOpen && (
                <div
                  className="navbar-dropdown-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/newsletters">Newsletters</Link>
                  <Link to="/publications">Publications</Link>
                  <Link to="/events">Events</Link>
                </div>
              )}
            </div>

            <a href="#contact">Contact Us</a>
          </div>

          <div className="navbar-actions">
            <button
              onClick={toggleTheme}
              className="navbar-theme-btn"
              aria-label="Toggle theme"
            >
              {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="navbar-mobile-toggle"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="navbar-mobile-menu">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
            <Link to="/practice" onClick={() => setIsOpen(false)}>
              Practice Areas
            </Link>
            <Link to="/people" onClick={() => setIsOpen(false)}>
              Our People
            </Link>
            <Link to="/careers" onClick={() => setIsOpen(false)}>
              Careers
            </Link>

            <details className="mobile-dropdown">
              <summary>Academics</summary>
              <div className="mobile-dropdown-menu">
                <Link to="/blogs" onClick={() => setIsOpen(false)}>
                  Blogs
                </Link>
                <Link to="/newsletters" onClick={() => setIsOpen(false)}>
                  Newsletters
                </Link>
                <Link to="/publications" onClick={() => setIsOpen(false)}>
                  Publications
                </Link>
                <Link to="/events" onClick={() => setIsOpen(false)}>
                  Events
                </Link>
              </div>
            </details>

            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
