import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="mailto: adas0262@gmail.com" className="footer__link">
          Send me Hi
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/aditya-das-250365200/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://github.com/Delta0077"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://dribbble.com/delta0077"
              target="_blank"
            >
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
