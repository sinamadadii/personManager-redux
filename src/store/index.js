import { applyMiddleware, creatstore } from 'redux';
import { reducers } from './../reducers/index';
import { compose } from 'redux';
import thunk from 'redux-thunk';

const store = creatstore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
store.subscribe(() => console.log(store.getstate()))
