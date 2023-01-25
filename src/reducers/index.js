import { combineReducers } from "redux";
import { personReducer } from "./Person";
import { personsReducer } from './Persons';
import { showPersonsReducer } from './showPersons';

export const reducers = combineReducers({
    persons: personsReducer,
    person: personReducer,
    showpersons: showPersonsReducer

})