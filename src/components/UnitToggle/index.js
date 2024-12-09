import React from 'react'

const UnitToggle = ({unit, onToggle}) => (
  <div style={{textAlign: 'center', margin: '10px 0'}}>
    <button onClick={onToggle}>
      Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
    </button>
  </div>
)

export default UnitToggle
