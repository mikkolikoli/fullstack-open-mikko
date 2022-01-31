import React, {useState} from "react";


const PersonForm = ({ persons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault();
    const names = persons.map(person => person.name)

    if (names.includes(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = [{name: newName, number: newNumber}]
      persons.concat(newPerson)
    }
  }

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
    </div>
  )
}
  
export default PersonForm