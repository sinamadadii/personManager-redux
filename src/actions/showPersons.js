export const showPersons = () => {
    return async dispatch => {
        await dispatch({ type: 'SHOW_PERSONS' })
    }
}