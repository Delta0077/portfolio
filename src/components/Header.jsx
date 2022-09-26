import React from "react";
// import "../styles/style.css";
import "../styles/Header.css";
import devJane from "../assets/devjane.png";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={devJane} alt=""></img>
      </div>
      <button className="nav-toggle" aria-label="toggle navigation">
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li>
            <a href="#services" className="nav__link">
              My Services
            </a>
          </li>
          <li>
            <a href="#about" className="nav__link">
              About Me
            </a>
          </li>
          <li>
            <a href="#work" className="nav__link">
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
