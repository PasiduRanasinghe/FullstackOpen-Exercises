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
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  //handle the showing of persons when it using search
  const personToShow = showAll ? persons : filteredPersons;

  //check for name matches and return person object if there is a match
  const checkPersonsMatch = (name) => {
    const hasMatch = persons.find(
      (person) => person.name.localeCompare(name) === 0
    );
    // console.log(hasMatch);

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

    //check for matches in name
    const matchedPerson = checkPersonsMatch(newName);
    if (matchedPerson) {
      //ask if the user want to change the number
      if (
        !window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one`
        )
      ) {
        //if not end
        return;
      }

      //if true change the number
      const changedPerson = { ...matchedPerson, number: newNumber };
      personService
        .update(matchedPerson.id, changedPerson)
        .then((personData) => {
          setPersons(
            persons.map((note) =>
              note.id === matchedPerson.id ? personData : note
            )
          );
        });
    } else {
      //send data to save to backend server
      personService
        .create({
          name: newName,
          number: newNumber,
          id: `${persons.length + 1}`,
        })
        .then((personData) => {
          //add data to the persons variable
          setPersons([...persons, personData]);
        });
    }
    setNewName(""); //clear the input element value
    setNewNumber(""); //clear the input element value
  };

  //handel the delete button click and remove it from the array
  const handleDelete = (person) => {
    if (!window.confirm(`Delete ${person.name} ?`)) {
      return;
    }
    personService.delete(person.id).then((personData) => {
      setPersons(persons.filter((p) => p.id !== personData.id));
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
