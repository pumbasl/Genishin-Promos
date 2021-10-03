import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clientReducer from './reducers/clientReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(clientReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;
