// OffcanvasComponent.js
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./offCanvas.component.sass";

const OffcanvasComponent = ({ id, img, location, floors, tourlink }) => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id={id}
      aria-labelledby={`${id}Label`}
    >
      <div className="offcanvas-header">
        <img
          src="./topgolfLogo.png"
          alt="Top Golf Logo"
          className="offCanvas-logo"
        />
        <button
          type="button"
          className="closebtn btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="image-container">
        <img src="./tgImg.jpg" alt={location} className="offcanvas-image" />
        <i className="far fa-heart offcanvas-heart"></i>
      </div>
      <div className="offcanvas-body">
        <h1>{location}</h1>
        <div className="feature-list">
          <ul>
            <li>
              <i className="fas fa-building"></i> {floors} FLOORS
            </li>
            <li>
              <i className="fas fa-golf-ball"></i> 100+ ALL-WAETHER BAYS
            </li>
            <li>
              <i className="fas fa-tv"></i> TOPTRACER GAMES
            </li>
          </ul>
        </div>
        <hr className="blue-line" />
        <div className="contact-info">
          <div className="left-column">
            <p className="locationDetailsHeader">Phone</p>
            <p className="locationDetailsText">(832) 200-0106</p>

            <p className="locationDetailsHeader address">Address</p>
            <p className="locationDetailsText">560 Spring Park Center Blvd</p>
            <p className="locationDetailsText">{location}, TX</p>
          </div>
          <div className="right-column">
            <p className="locationDetailsHeader">Hours of Operation</p>
            <p className="locationDetailsText">Mon-Thurs: 10AM - 11PM</p>
            <p className="locationDetailsText">Fri: 10AM - 12PM</p>
            <p className="locationDetailsText">Sat: 9AM - 12PM</p>
            <p className="locationDetailsText">Sun: 9AM - 11PM</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

OffcanvasComponent.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  floors: PropTypes.number.isRequired,
  tourlink: PropTypes.string.isRequired,
};

export default OffcanvasComponent;
