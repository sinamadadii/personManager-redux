import React, { useRef } from "react";
import { Button } from "react-bootstrap";

const NewPerson = ({ setPerson, newPerson, person }) => {
    const focusInput = useRef(null);

    return (
        <div className="m-2 p-2">
            <form
                className="form-inline justify-content-center"
                onSubmit={event => event.preventDefault()}
            >
                <div className="input-group w-25">
                    <input
                        ref={focusInput}
                        type="text"
                        placeholder="اسم بهم بده"
                        className="form-control"
                        onChange={setPerson}
                        value={person}
                    />
                    <div className="input-group-prepend">
                        <Button
                            type="submit"
                            variant="success"
                            size="sm"
                            className="fa fa-plus-square"
                            onClick={newPerson}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewPerson;
