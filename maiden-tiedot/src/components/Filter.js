import React, {useState} from "react";

const Filter = ({ setShownCountries, countries }) => {
  const [filter, setFilter] = useState('')

  const handleInput = (event) => {
    setFilter(event.target.value)
    const filteredCountries = countries.filter(country => country.name.includes(filter))
    setShownCountries(filteredCountries)
  }

  return (
    <div>
      find countries <input value={filter} onChange={handleInput} />
    </div>
  )
}

export default Filter