import React, { useState } from "react";
import "./header.component.sass";
import PropTypes from "prop-types";

const Header = ({ locations, selectedLocation, handleLocationSelect }) => {
  // State variable to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="title">
          <img src="./topgolfLogo.png" alt="Top Golf Logo" className="logo" />
        </div>
        <div className="dropdown">
          <div className="dropdown-select" onClick={toggleDropdown}>
            <span className="select-text">Select a location</span>
            <i
              className={
                isDropdownOpen ? "fas fa-chevron-up" : "fas fa-chevron-down"
              }
            ></i>
          </div>
          {/* Dropdown options container with conditional rendering */}
          <div className={`dropdown-options ${isDropdownOpen ? "show" : ""}`}>
            {/* Map through locations and render options */}
            {locations.map((location) => (
              <div
                key={location.site_id}
                className="dropdown-option"
                onClick={() => {
                  handleLocationSelect(location);
                  toggleDropdown(); // Close dropdown after selection
                }}
              >
                {location.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

// Define PropTypes for the props
Header.propTypes = {
  locations: PropTypes.array,
  selectedLocation: PropTypes.object, 
  handleLocationSelect: PropTypes.func,
};

export default Header;
