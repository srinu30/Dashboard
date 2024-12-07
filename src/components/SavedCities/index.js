import React from 'react'

const SavedCities = ({cities, onCityClick, onRemoveCity}) => (
  <div>
    <h3>Saved Cities</h3>
    <ul>
      {cities.map((city, index) => (
        <li cities={index} style={{marginBottom: '10px'}}>
          <button
            onClick={() => onCityClick(city)}
            style={{marginRight: '10px'}}
          >
            {city}
          </button>
          <button onClick={() => onRemoveCity(city)} style={{color: 'red'}}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default SavedCities
