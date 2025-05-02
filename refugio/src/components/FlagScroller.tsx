import React from 'react'

const FlagScroller = () => {
  return (
    <div className="scroll-container">
    <div className="wrapper">
      {[
        { code: 'mx', name: 'Mexico' },
        { code: 'ar', name: 'Argentina' },
        { code: 'cl', name: 'Chile' },
        { code: 'co', name: 'Colombia' },
        { code: 'cu', name: 'Cuba' },
        { code: 'do', name: 'Dominican Republic' },
        { code: 'pe', name: 'Peru' },
        { code: 've', name: 'Venezuela' },
        { code: 'br', name: 'Brazil' },
        { code: 'gt', name: 'Guatemala' },
        { code: 'hn', name: 'Honduras' },
        { code: 'sv', name: 'El Salvador' },
        { code: 'ni', name: 'Nicaragua' },
        { code: 'cr', name: 'Costa Rica' },
        { code: 'pa', name: 'Panama' },
        { code: 'py', name: 'Paraguay' },
        { code: 'uy', name: 'Uruguay' },
        { code: 'bo', name: 'Bolivia' },
        { code: 'ec', name: 'Ecuador' },
        { code: 'pr', name: 'Puerto Rico' },
      ].map((country, index) => (
        <div key={country.code} className={`item item${index + 1}`}>
          <img
            src={`https://flagcdn.com/w320/${country.code}.png`}
            alt={country.name}
            className="flag-img"
          />
        </div>
      ))}
    </div>
  </div>
  )
}

export default FlagScroller