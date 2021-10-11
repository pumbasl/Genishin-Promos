import {
    setUsers
} from '../actions/adminActions';

import {
    setUserPromoCodes,
    setToken,
    setErrors
} from '../actions/userActions';

import {
    allUsers,
    logoutUser,
    searchUsers,
    editUser,
    addPromoCode,
    addNews
} from '../../graphql';

//notify
import { toast } from 'react-hot-toast';
//

import Fetch from '../../fetch/fetch';

export function fetchAddNews(data){
    return async (dispatch) => {
        await Fetch({
            query: addNews,
            variables: JSON.stringify(data)
        }, 'api')
        .then(
            (response) => {
                if(response?.error){
                    dispatch(setErrors(response.message));
                } else {
                    toast({title: "Уведомление", body: 'Новость успешно создана', time: "Несколько секунд назад"}); //уведомление
                }
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchAddPromoCode(data){
    return async (dispatch) => {
        await Fetch({
            query: addPromoCode,
            variables: JSON.stringify(data)
        }, 'api')
        .then(
            (response) => {
                if(response?.error){
                    dispatch(setErrors(response.message));
                } else {
                    toast({title: "Уведомление", body: 'Промокод успешно добавлен', time: "Несколько секунд назад"}); //уведомление
                }
            },

            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchEditUser(data){
    return async (dispatch) => {
        await Fetch({
            query: editUser,
            variables: JSON.stringify(data)
        }, 'api')
        .then(
            (response) => {
                if(response?.error){
                    dispatch(setErrors(response.message));
                } else {
                    toast({title: "Уведомление", body: 'Пользователь успешно сохранен.', time: "Несколько секунд назад"}); //уведомление
                }
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchSearchUsers(name){
    return async (dispatch) => {
        await Fetch({
            query: searchUsers,
            variables: JSON.stringify({
                name
            })
        }, 'api')
        .then(
            (response) => {
                dispatch(setUsers(response.searchUsersByName));
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchLogOutUser(id){
    return async (dispatch) => {
        await Fetch({
            query: logoutUser,
            variables: JSON.stringify({
                id
            })
        }, 'api')
        .then(
            (response) => {
                console.log(response)
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchAdminAllUsers(){
    return async (dispatch) => {
        await Fetch({
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