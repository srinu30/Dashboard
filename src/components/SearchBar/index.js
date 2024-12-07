import React, {useState} from 'react'

const SearchBar = ({onSearch}) => {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim())
      setCity('')
    }
  }

  return (
    <div style={{textAlign: 'center', marginBottom: '20px'}}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
        style={{padding: '10px', width: '70%', marginRight: '10px'}}
      />
      <button onClick={handleSearch} style={{padding: '10px'}}>
        Search
      </button>
    </div>
  )
}

export default SearchBar
