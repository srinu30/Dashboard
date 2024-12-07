import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import SavedCities from './components/SavedCities'
import UnitToggle from './components/UnitToggle'

const API_KEY = 'YOUR_API_KEY'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [savedCities, setSavedCities] = useState(
    JSON.parse(localStorage.getItem('savedCities')) || [],
  )
  const [unit, setUnit] = useState('C')
  const [error, setError] = useState(null)

  const fetchWeather = async city => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&units=metric`,
      )
      setWeather(response.data)
      setError(null)
    } catch {
      setError('City not found. Please try again.')
      setWeather(null)
    }
  }

  const saveCity = city => {
    if (!savedCities.includes(city)) {
      const updatedCities = [...savedCities, city]
      setSavedCities(updatedCities)
      localStorage.setItem('savedCities', JSON.stringify(updatedCities))
    }
  }

  const removeCity = city => {
    const updatedCities = savedCities.filter(savedCity => savedCity !== city)
    setSavedCities(updatedCities)
    localStorage.setItem('savedCities', JSON.stringify(updatedCities))
  }

  const toggleUnit = () => {
    setUnit(prevUnit => (prevUnit === 'C' ? 'F' : 'C'))
  }

  return (
    <div style={{padding: '20px', maxWidth: '600px', margin: 'auto'}}>
      <h1 style={{textAlign: 'center'}}>Weather Dashboard</h1>

      <SearchBar onSearch={city => fetchWeather(city)} />

      {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}

      <UnitToggle unit={unit} onToggle={toggleUnit} />

      {}
      {weather && (
        <>
          <WeatherCard weather={weather} unit={unit} />
          <button
            onClick={() => saveCity(weather.location.name)}
            style={{display: 'block', margin: '10px auto'}}
          >
            Save to Favorites
          </button>
        </>
      )}

      {}
      <SavedCities
        cities={savedCities}
        onCityClick={city => fetchWeather(city)}
        onRemoveCity={removeCity}
      />
    </div>
  )
}

export default App
