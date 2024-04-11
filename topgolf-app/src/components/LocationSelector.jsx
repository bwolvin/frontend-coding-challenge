import mural from "../assets/images/tg-mural.avif"

export default function LocationSelector({locations, selectedLocation, setSelectedLocation}) {
  return (
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
  )
}