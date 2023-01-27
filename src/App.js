import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Persons from './components/Person/Persons';
import { setShowPersons } from './actions/showPerson';
import { showPersonsReducer } from './reducers/showPersons';

const App = () => {

    const showPerson = useSelector(state => state.showPersons)
    const dispatch = useDispatch();
    return (
        <div className="rtl text-center">
            <Header appTitle="مدیریت کننده اشخاص" />

            <NewPerson />

            <Button
                onClick={() => dispatch(setShowPersons())}
                variant={showPerson ? "info" : "danger"}
            >
                نمایش اشخاص
            </Button>

            {showPerson ? <Persons /> : null}
        </div>
    );
};
export default App;
