import React from 'react'

const App = () => {

  return (
    <div>
      <h1>Hallo</h1>
      <Hello name = "Mikko"/>
      <Hello />
    </div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

export default App;
