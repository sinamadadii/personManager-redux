export const showPerosn = () => {
    return async dispatch => {
        await dispatch({ type: 'SHOW_PERSON' })
    }
}