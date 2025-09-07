import "../App.css";
import MobileMenu from "./mobilemenu.jsx";
import Teact, { useState, useRef } from "react";

function Header({ toggleHelp }) {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top bg-white border-bottom shadow-sm z-3">
        <div className="container">
          {/* Logo */}
          <div className="d-flex align-items-center me-3">
            <div
              className="d-flex align-items-center justify-content-center bg-primary rounded me-2"
              style={{ width: "32px", height: "32px" }}
            >
              <span className="text-white fw-bold small">⚖️</span>
            </div>
            <span className="h5 nav-1 mb-0 text-dark ">LegalAI</span>
          </div>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            onClick={handleMenuToggle}
          >
            <span
              className="navbar-toggler-icon"
              onClick={handleMenuToggle}
            ></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item me-3">
                <a href="#home" className="nav-link text-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#features" className="nav-link text-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item me-3">
                <a href="#demo" className="nav-link text-secondary">
                  Demo
                </a>
              </li>
              <li className="nav-item me-3">
                <button
                  className="btn btn-link nav-link text-secondary p-0"
                  onClick={toggleHelp}
                >
                  Help
                </button>
              </li>
              {/* <li className="nav-item ms-3">
                <div className="theme-toggle" title="Toggle Dark Mode"></div>
              </li> */}
            </ul>
          </div>
        </div>
        {isMenuOpen && <MobileMenu toggleHelp={toggleHelp} handleMenuToggle={handleMenuToggle} />}
      </nav>
      
    </>
  );
}
export default Header;
