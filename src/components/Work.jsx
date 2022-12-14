import React from "react";
import "../styles/Work.css";

export default function Work() {
  return (
    <>
      <section className="my-work" id="work">
        <h2 className="section__title section__title--work">My work</h2>
        <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>

        <div className="portfolio">
          {/*Portfolio item 01*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-01.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 02*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-02.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 03*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-03.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 04*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-04.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 05*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-05.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 06*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-06.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 07*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-07.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 08*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-08.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 09*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-09.jpg" alt="" className="portfolio__img" />
          </a>

          {/*Portfolio item 10*/}
          <a href="#" className="portfolio__item">
            <img src="/portfolio-10.jpg" alt="" className="portfolio__img" />
          </a>
        </div>
      </section>
    </>
  );
}
