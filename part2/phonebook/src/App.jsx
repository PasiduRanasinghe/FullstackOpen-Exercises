import { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState("");
  const [newName, setNewName] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [newNumber, setNewNumber] = useState("");

  //get data from json server

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      setFilteredPersons(
        persons.filter((person) => {
          return person.name
            .toLowerCase()
            .includes(String(event.target.value).toLowerCase());
        })
      );
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
      //send data to save to backend server
      personService
        .create({
          name: newName,
          number: newNumber,
          id: `${persons.length + 1}`,
        })
        .then((response) => {
          console.log(response);
          //add data to the persons variable
          setPersons([...persons, response.data]);
        });
    }
    setNewName(""); //clear the input element value
    setNewNumber(""); //clear the input element value
  };

  //handel the delete button click and remove it from the array
  const handleDelete = (person) => {
    window.confirm(`Delete ${person.name} ?`);
    personService.delete(person.id).then((response) => {
      setPersons(persons.filter((p) => p.id !== response.data.id));
    });
  };
  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilter={handleFilter} />

      <h2>Add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        name={newName}
        number={newNumber}
        handleInputName={handleOnchangeInputName}
        handleInputNumber={handleOnchangeInputNumber}
      />

      <h2>Numbers</h2>

      <Persons persons={personToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
