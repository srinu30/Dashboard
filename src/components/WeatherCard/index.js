import React from 'react'

const WeatherCard = ({weather, unit}) => {
  const {tempC, tempF, condition, humidity, windKmph} = weather.current
  const {name, region, country} = weather.location

  const temperature = unit === 'C' ? tempC : tempF
  const windSpeed =
    unit === 'C' ? `${windKmph} km/h` : `${(windKmph / 1.609).toFixed(1)} mph`

  return (
    <div
      style={{border: '1px solid #ccc', padding: '20px', borderRadius: '10px'}}
    >
      <h2>
        {name},{region},{country}
      </h2>
      <img
        src={condition.icon}
        alt={condition.text}
        style={{display: 'block', margin: 'auto'}}
      />
      <p style={{textAlign: 'center'}}>{condition.text}</p>
      <p>
        Temperature: {temperature}°{unit}
      </p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed}</p>
    </div>
  )
}

export default WeatherCard
