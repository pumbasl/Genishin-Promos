import {
    setUsers
} from '../actions/adminActions';

import {
    setUserPromoCodes,
    setToken,
} from '../actions/userActions';

import {
    allUsers
} from '../../graphql';

import Fetch from '../../fetch/fetch';

export function fetchAdminAllUsers(){
    return (dispatch) => {
        Fetch({
            query: allUsers,
            variables: {}
        }, 'api')
        .then(
            (response) => {
                dispatch(setUsers(response.regUsers));
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        )
    };
}

function ErrorCatch(error, dispatch){
    if(error.message === 'FAIL_UPDATE_TOKENS'){
        console.log('FAILED REFRESH TOKEN | LOGOUT');
        Fetch({}, 'logout');
        delete localStorage.token;
        dispatch(setToken(null));
        dispatch(setUserPromoCodes([]));
    } else {
        console.log(error);
    }
}