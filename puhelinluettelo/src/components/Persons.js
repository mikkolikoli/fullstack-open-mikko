import React from "react";


const Entry = ({ person }) => {
  return (
    <div>
      <p>{person.name} {person.number}</p>
    </div>
  )
}

const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map(person =>
        <Entry key={person.name} person={person} />)}
    </div>
  )
}
  
  export default Persons