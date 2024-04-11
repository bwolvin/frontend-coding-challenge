import './App.css';
import './styles/index.scss';
import React, { useState, useEffect } from "react"
import axios from "axios"
import mural from "./assets/images/tg-mural.avif"
import { FetchData } from './utils/Services';

function App() {
  const [locations, setLocations] = useState();
  const [selectedLocation, setSelectedLocation] = useState();  
  useEffect(()=> {
    FetchData().then(data => {
      setLocations(data);
    })
  },[])
  return (
    <div className="App">
      {locations && 
      <>
        <div className="location__selector-wrapper">
          <div className='location__selector-bg'>
            <img  src={mural}/>
          </div>
          <div className='location__selector-content'>
            <h1>Select a location near you to learn more!</h1>
            <label htmlFor='citySelect' className='citySelect__label'>Select an option</label>
            <select id="citySelect" value={selectedLocation ? selectedLocation.name : "Select an Option"} onChange={(e) => setSelectedLocation(locations.find(location => location.name === e.target.value))}>
              <option value={null}>Select an option</option>
              {locations.map((location, i) => (
                <option key={i} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='location__display-wrapper'>
          {selectedLocation ?
          <>
            <div className="back-button">
              <button  onClick={()=> setSelectedLocation(null)}>Back</button>
            </div>
              <div className='location__display'>
                <h2>
                  {selectedLocation.name}
                </h2>
                <img src={selectedLocation.img}/>
                <div className='location__details'>
                  {selectedLocation.details}  
                </div>
                <div className='location__features'>
                  <h3>Features:</h3>
                  <ul>
                    <li><h4>Floors:</h4> {selectedLocation.features.floors}</li>
                    <li><h4>Amenities:</h4> {selectedLocation.features.amenities.map((amen,i) => (
                      <span key={i}>
                        {amen.replaceAll("_", " ")}
                      </span>
                    ))}</li>
                  </ul> 
                  <div className="location__virtual-tour"><a target="_blank" href={selectedLocation.features.virtual_tour_link}>Take a Virtual Tour</a></div>
                </div>
              </div>
            </>
          : <div className='location-block__selector'>
            {locations.map((location,i) => (
              <div key={i} className='location__block' onClick={(e) => setSelectedLocation(location)}>
                <img src={location.img}/>
                <h3>{location.name}</h3>
              </div>
            ))}
            </div>
          }
        </div>
      </>
        }
    </div>
  );
}

export default App;
