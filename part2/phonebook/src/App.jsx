import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  //check for matches and return true if there is a match
  const checkPersonsMatches = (name) => {
    const hasMatch = persons.some((person) => person.name === name);
    return hasMatch;
  };

  //handle input element data
  const handleOnchangeInput = (event) => {
    setNewName(event.target.value);
  };

  //handle the add button click and add value to the array
  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkPersonsMatches(newName)) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName }]);
    }
    setNewName("");//clear the input element value
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleOnchangeInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* display persons in persons array */}
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
