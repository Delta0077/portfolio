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
            <a className="social-list__link" href="https://codepen.io">
              <i className="fa-brands fa-codepen"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="http://dribbble.com">
              <i className="fa-brands fa-dribbble"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://twitter.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
