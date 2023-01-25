import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Persons from "./components/Person/Persons";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";

const App = () => {
    const [getPersons, setPersons] = useState([]);
    const [getSinglePerson, setSinglePerson] = useState("");
    const [getShowPersons, setShowPersons] = useState(true);

    const handleShowPerson = () => {
        setShowPersons(!getShowPersons);
    };

    const handleDeletePerson = id => {
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id); //! = =
        setPersons(filteredPersons);
    };

    const handleNameChange = (event, id) => {
        const allPersons = getPersons;

        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        setPersons(persons);
    };

    const handleNewPerson = () => {
        const persons = [...getPersons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname: getSinglePerson
        };

        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            setPersons(persons);
            setSinglePerson("");
        }
    };

    const setPerson = event => {
        setSinglePerson(event.target.value);
    };

    let person = null;

    if (getShowPersons) {
        person = (
            <Persons
                persons={getPersons}
                nameChange={handleNameChange}
                deletePerson={handleDeletePerson}
            />
        );
    }

    return (
        <div className="rtl text-center">
            <Header
                appTitle="مدیریت کننده اشخاص"
                persons={getPersons}
                person={getSinglePerson}
            />

            <NewPerson
                newPerson={handleNewPerson}
                person={getSinglePerson}
                setPerson={setPerson}
            />

            <Button
                onClick={handleShowPerson}
                variant={getShowPersons ? "info" : "danger"}
            >
                نمایش اشخاص
            </Button>

            {person}
        </div>
    );
};
export default App;
