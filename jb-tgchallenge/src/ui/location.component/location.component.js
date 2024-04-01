import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import OffcanvasComponent from "../offCanvas.component/offCanvas.component";
import "./locations.component.sass";

const Location = ({ location }) => {
  const { img, name, details, features } = location;
  const offcanvasId = `offcanvas-${name.replace(/\s+/g, "-").toLowerCase()}`; // Generate unique offcanvas ID based on location name

  return (
    <div className="location-container">
      <div className="hero-section">
        <img src={img} alt={name} className="hero-image" />
        <div className="name-container">
          <h1 className="name">{name}</h1>
          <p>
            ESTIMATED WALK-IN WAIT: <span className="no-wait">NO WAIT</span>
          </p>
        </div>
      </div>
      <div className="details-section">
        <h2 className="details-header">Details</h2>
        <p className="details-text">{details}</p>
        {/* Button to open offcanvas */}
        <button
          type="button"
          className="button-custom btn btn-primary"
          data-bs-toggle="offcanvas"
          data-bs-target={`#${offcanvasId}`}
          aria-controls={offcanvasId}
        >
          View Location Details
        </button>
        <div className="features-section">
          <h2 className="features-header">Features & Amenities</h2>
          <div className="features-wrapper">
            <ul className="features-list">
              <li className="feature-item">
                <i className="fas fa-building"></i> Number of Floors:{" "}
                {features.floors}
              </li>
              <li className="feature-item">
                <i className="fas fa-wifi"></i> Free WiFi:{" "}
                {features.amenities && features.amenities.includes("free_wifi")
                  ? "Yes"
                  : "No"}
              </li>
              <li className="feature-item">
                <i className="fas fa-street-view"></i>
                <a
                  href={features.virtual_tour_link}
                  className="virtual-tour-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Virtual Tour
                </a>
              </li>
              {features.amenities &&
                features.amenities.includes("event_spaces") && (
                  <li className="feature-item">
                    <i className="fas fa-calendar-alt"></i> Event Spaces
                    Available
                  </li>
                )}
            </ul>
            <ul className="features-list">
              <li className="feature-item">
                <i className="fas fa-fire"></i> RoofTop Terrace with Fire Pits
              </li>
              <li className="feature-item">
                <i className="fas fa-tv"></i> Over 200 HDTVS
              </li>
              <li className="feature-item">
                <i className="fas fa-golf-ball"></i> 100+ All-Weather Bays
              </li>
              {features.amenities &&
                features.amenities.includes("restaurant") && (
                  <li className="feature-item">
                    <i className="fas fa-utensils"></i> Bar & Restaurant
                  </li>
                )}
            </ul>
          </div>
          {/* google-maps iframe */}
          <div className="google-map">
            <iframe
              width="100%"
              height="400px"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCoT36vbuOBn48OtEWQ6apNTxiNiIidoEg&q=Top+Golf,+${name}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* Offcanvas component */}
      <OffcanvasComponent
        id={offcanvasId}
        img={img}
        location={name}
        floors={features.floors}
        tourlink={features.virtual_tour_link}
      />
    </div>
  );
};

// Define PropTypes for the props
Location.propTypes = {
  location: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    features: PropTypes.shape({
      floors: PropTypes.number.isRequired,
      amenities: PropTypes.arrayOf(PropTypes.string),
      virtual_tour_link: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Location;
