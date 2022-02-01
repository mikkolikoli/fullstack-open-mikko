import React, {useState} from "react";

const Filter = ({ persons, setShownPersons }) => {
  const [filter, setFilter] = useState('');

  const handleFilter = (event) => {
    setFilter(event.target.value.toLowerCase())

    const contactsToShow = (filter === '') ? 
      persons:
      persons.filter(person => 
        person.name.toLowerCase().includes(filter))
      
      setShownPersons(contactsToShow)
  }

  return (
    <div>
      <div>filter shown with <input value={filter} onChange={handleFilter} /></div>
    </div>
  )
}

export default Filter