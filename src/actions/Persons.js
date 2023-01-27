import reducers from '.././reducers';
import { clearPerson } from './Person';

export const addPerson = fullname => {

    return async (dispatch, getstate) => {
        const persons = [...getstate().persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            fullname
        };
        if (person.fullname !== "" && person.fullname !== " ") {
            persons.push(person);
            await dispatch({ type: 'ADD_PERSON', payload: persons });
            await dispatch(clearPerson());
        }
    }
}

export const deletePerson = personId => {
    return async (dispatch, getstate) => {
        const persons = [...getstate().persons];
        const filteredPersons = persons.filter(p => p.id !== personId);
        await dispatch({ type: 'DELETE_PERSON', payload: filteredPersons })
    }
}

export const updatePerson = (event, personId) => {
    return async (dispatch, getstate) => {
        const allPersons = getstate().persons;
        const personIndex = allPersons.findIndex(p => p.id === personId);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;

        const persons = [...allPersons];

        persons[personIndex] = person;
        await dispatch({ type: 'UPDATE_PERSON', payload: persons })
    }
}