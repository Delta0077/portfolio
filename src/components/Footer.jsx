import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <a href="mailto: adas0262@gmail.com" className="footer__link">
          Mail Me
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://codepen.io">
              a
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="http://dribbble.com">
              b
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://twitter.com">
              c
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com">
              d
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
