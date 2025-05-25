import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: 771122369 }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();
  //check for name matches and return true if there is a match
  const checkPersonsMatches = (name) => {
    const hasMatch = persons.some((person) => person.name === name);
    return hasMatch;
  };

  //handle input element data name
  const handleOnchangeInputName = (event) => {
    setNewName(event.target.value);
  };
  //handle input element data number 
  const handleOnchangeInputNumber = (event) => {
    setNewNumber(event.target.value);
  };

  //handle the add button click and add value to the array
  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkPersonsMatches(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }
    setNewName("");//clear the input element value
    setNewNumber("");//clear the input element value
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input required value={newName} onChange={handleOnchangeInputName} />
        </div>
        <div>
          number: <input required type='number' value={newNumber} onChange={handleOnchangeInputNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* display persons in persons array */}
      {persons.map((person) => (
        <div key={person.name}>{person.name} {person.number}</div>
      ))}
    </div>
  );
};

export default App;
