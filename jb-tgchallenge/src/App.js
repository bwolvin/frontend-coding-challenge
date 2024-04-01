import React, { useState, useEffect } from "react";
import Header from "./ui/header.component/header.component";
import LandingPage from "./ui/landingPage.component/landingPage.component";
import Location from "./ui/location.component/location.component";
import Footer from "./ui/footer.component/footer.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.css";

const App = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/locations");
        if (!response.ok) {
          throw new Error("Failed to fetch locations");
        }
        const data = await response.json();
        setLocations(data.response);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <Header
        locations={locations}
        selectedLocation={selectedLocation}
        handleLocationSelect={handleLocationSelect}
      />

      {!selectedLocation ? (
        <LandingPage />
      ) : (
        <Location location={selectedLocation} />
      )}

      <Footer />
    </div>
  );
};

export default App;
