import { createStore, compose } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clientReducer from './reducers/clientReducer';

const composeMiddle = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(clientReducer, composeMiddle);

export default store;
