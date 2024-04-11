import './App.css';
import './styles/index.scss';
import React, { useState, useEffect } from "react"

import { FetchData } from './utils/Services';
import LocationSelector from './components/LocationSelector';
import SelectedLocationCard from './components/SelectedLocationCard';
import LocationBlock from './components/LocationBlock';

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
        <LocationSelector locations={locations} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} />
        <div className='location__display-wrapper'>
          {selectedLocation ?
            <SelectedLocationCard selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
          : <div className='location-block__selector'>
            {locations.map((location,i) => (
             <LocationBlock location={location} i={i} setSelectedLocation={setSelectedLocation}/>
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
