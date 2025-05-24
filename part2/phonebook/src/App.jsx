import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleOnchangeInput = (event) =>{
 setNewName(event.target.value)
  }
  const handleSubmit = ()=>{
    setPersons(persons.concat(newName));
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleOnchangeInput}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>{persons.map((name)=>(
        <li>{name}</li>
      ))}</ul>
    </div>
  )
}

export default App