import { combineReducers } from "redux";
import { personReducer } from './person';
import { personsReducer } from './persons';
import { showPersonsReducer } from './showPersons';

export const reducers = combineReducers({
    person: personReducer,
    persons: personsReducer,
    showPersons: showPersonsReducer
})