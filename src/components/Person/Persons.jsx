import React from "react";
import Person from "./Person";

const Persons = ({ persons, deletePerson, nameChange }) => {
    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => deletePerson(person.id)}
                    changed={event => nameChange(event, person.id)}
                />
            ))}
        </div>
    );
};

export default Persons;
