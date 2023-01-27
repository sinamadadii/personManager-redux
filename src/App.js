import React from "react";
import { Button } from "react-bootstrap";
import Header from "./components/common/Header";
import NewPerson from "./components/Person/NewPerson";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const App = () => {

    const showPersons = useSelector(state => state.showPersons)
    const dispatch = useDispatch();
    return (
        <div className="rtl text-center">
            <Header appTitle="مدیریت کننده اشخاص" />

            <NewPerson />

            <Button
                onClick={() => dispatch(showPersons)}
                variant={showPersons ? "info" : "danger"}
            >
                نمایش اشخاص
            </Button>

            {showPersons}
        </div>
    );
};
export default App;
