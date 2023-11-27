import React from "react";
import { Link } from "react-router-dom";
import FooterThree from "../Footer/FooterThree";
import Header from "../Header/HeaderFour";
import { pageTitle } from "../PageTitle";

const PortfolioTwo = () => {
  pageTitle("Portfolio Two");
  return (
    <>
      <Header />
      <div className="portfolio__column-two section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6 mb-30">
              <div className="portfolio__column-two-item">
                <img
                  className="img__full"
                  src="assets/img/portfolio/portfolio-16.jpg"
                  alt=""
                />
                <div className="portfolio__column-two-item-content">
                  <span>Photography</span>
                  <h4>
                    <Link to="/portfolio-details-two">Photography</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 md-mb-30">
              <div className="portfolio__column-two-item">
                <img
                  className="img__full"
                  src="assets/img/portfolio/portfolio-17.jpg"
                  alt=""
                />
                <div className="portfolio__column-two-item-content">
                  <span>Photography</span>
                  <h4>
                    <Link to="/portfolio-details-two">Photography</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 mb-30">
              <div className="portfolio__column-two-item">
                <img
                  className="img__full"
                  src="assets/img/portfolio/portfolio-18.jpg"
                  alt=""
                />
                <div className="portfolio__column-two-item-content">
                  <span>Photography</span>
                  <h4>
                    <Link to="/portfolio-details-two">Photography</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 md-mb-30">
              <div className="portfolio__column-two-item">
                <img
                  className="img__full"
                  src="assets/img/portfolio/portfolio-19.jpg"
                  alt=""
                />
                <div className="portfolio__column-two-item-content">
                  <span>Photography</span>
                  <h4>
                    <Link to="/portfolio-details-two">Photography</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 md-mb-30">
              <div className="portfolio__column-two-item">
                <img
                  className="img__full"
                  src="assets/img/portfolio/portfolio-20.jpg"
                  alt=""
                />
                <div className="portfolio__column-two-item-content">
                  <span>Photography</span>
                  <h4>
                    <Link to="/portfolio-details-two">Photography</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="portfolio__column-two-item">
                <img
                  className="img__full"
                  src="assets/img/portfolio/portfolio-21.jpg"
                  alt=""
                />
                <div className="portfolio__column-two-item-content">
                  <span>Photography</span>
                  <h4>
                    <Link to="/portfolio-details-two">Photography</Link>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-xl-12 mt-60 t-center">
              <Link
                className="theme-btn-1"
                to="/portfolio-two"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                All Project<i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FooterThree />
    </>
  );
};

export default PortfolioTwo;
