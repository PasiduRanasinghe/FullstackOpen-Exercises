import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [filteredPersons, setFilteredPersons] = useState("");
  const [newName, setNewName] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newNumber, setNewNumber] = useState("");

  //handle the showing of persons when it using search
  const personToShow = showAll ? persons : filteredPersons;


  //check for name matches and return true if there is a match
  const checkPersonsMatches = (name) => {
    const hasMatch = persons.some(
      (person) => person.name.localeCompare(name) === 0
    );
    return hasMatch;
  };

  //handle input element data name
  const handleFilter = (event) => {
    if (event.target.value === "") {
      setShowAll(true);
    } else {
      setFilteredPersons( persons.filter((person) => {
        return person.name
          .toLowerCase()
          .includes(String(event.target.value).toLowerCase());
      }))
      setShowAll(false);
    }
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
      setPersons([
        ...persons,
        { name: newName, number: newNumber, id: persons.length + 1 },
      ]);
    }
    setNewName(""); //clear the input element value
    setNewNumber(""); //clear the input element value
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={handleFilter} type="text" />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input required value={newName} onChange={handleOnchangeInputName} />
        </div>
        <div>
          number:{" "}
          <input
            required
            value={newNumber}
            onChange={handleOnchangeInputNumber}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* display persons in persons array */}
      {personToShow.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};

export default App;
