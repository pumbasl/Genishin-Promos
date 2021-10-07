import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clientReducer from './reducers/clientReducer';
import adminReducer from './reducers/adminReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({ user: clientReducer, admin: adminReducer });

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;