import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Country'
import Filter from './components/Filter'

const App = () => {
  const [shownCountries, setShownCountries] = useState([])
  const [countries, setCountries] = useState([])
  useEffect(() => 
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(response => {
        setCountries(response.data)
      }))

  return (
    <div>
      <Filter setShownCountries={setShownCountries} countries={countries} />
      <Countries countries={shownCountries} />
    </div>
  );
}

export default App;
