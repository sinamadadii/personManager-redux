export const showPersonsReducer = (state = true, action){
    switch (action.type) {
        case "SHOW_PERSON":
            return !state;
        default:
            return state;

    }
}