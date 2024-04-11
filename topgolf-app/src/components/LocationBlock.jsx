export default function LocationBlock({location, setSelectedLocation, i}) {
  return (
    <div key={i} className='location__block' onClick={(e) => setSelectedLocation(location)}>
      <img src={location.img}/>
      <h3>{location.name}</h3>
    </div>
    )
}