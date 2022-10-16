import React, { useState } from "react";
import "../styles/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  function handleClick() {
    setNavOpen((prevState) => !prevState);
  }
  return (
    <header>
      <div className="logo">
        <img src="/devadi.svg" alt=""></img>
      </div>
      <nav className="nav">
        <div className={navOpen ? "navbar showMenu" : "nav__item"}>
          <ul className="nav__list">
            <li className="nav__item  showMenu">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item  showMenu">
              <a href="#services" className="nav__link">
                My Services
              </a>
            </li>
            <li className="nav__item  showMenu">
              <a href="#about" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__item  showMenu">
              <a href="#work" className="nav__link">
                My Work
              </a>
            </li>
            <li className="nav__item  showMenu">
              <a href="/Das_aditya.pdf" className="nav__link" download>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* hamburger menu start  */}
      <div className="hamburger-menu">
        <a
          href="#"
          onClick={handleClick}
          className={`navbar ${navOpen ? "showMenu" : ""}`}
        >
          <GiHamburgerMenu className="hamburger-icon" />
        </a>
      </div>
    </header>
  );
}
