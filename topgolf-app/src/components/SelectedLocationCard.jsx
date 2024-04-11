export default function SelectedLocationCard({selectedLocation, setSelectedLocation}) {

  return (
    <>
      <div className="back-button">
        <button onClick={()=> setSelectedLocation(null)}>Back</button>
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
  )
}