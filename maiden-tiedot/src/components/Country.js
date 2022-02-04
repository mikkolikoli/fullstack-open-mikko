import React from "react";

const Countries = ({ countries }) => {
  if (countries.length > 10 || countries.length === 0) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  return (
    <div>
      {countries.map(country => 
        <div id={country.name}>
          {country.namel}
        </div>)}
    </div>
  )
}

export default Countries