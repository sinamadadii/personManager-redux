import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Person from "./Person";
import { deletePerson } from './../../actions/Persons';

const Persons = ({ nameChange }) => {

    const persons = useSelector(state => state.persons);
    const dispatch = useDispatch();

    return (
        <div>
            {persons.map(person => (
                <Person
                    key={person.id}
                    fullname={person.fullname}
                    deleted={() => dispatch(deletePerson(person.id))}
                    changed={event => nameChange(event, person.id)}
                />
            ))}
        </div>
    );
};

export default Persons;
