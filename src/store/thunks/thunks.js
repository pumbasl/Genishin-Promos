import {
    setPromoCodes,
    setServer,
    setUserPromoCodes,
    setSubfields,
    setToken,
    setErrors
} from '../actions/actions';

import Fetch from '../../fetch/fetch';

import { getPromoCodes, changeServer, getUserPromo, getSubfields, newUserPromo, login as loginQuery } from '../../graphql';

export function fetchLogin(data){
    const { login, password } = data;
    return (dispatch) => {
        Fetch({
            query: loginQuery,
            variables: JSON.stringify({
                login: login,
                password: password
            })
        }, 'api')
        .then(
            (response) => {
                if(response?.error){
                    dispatch(setErrors(response.message));
                } else {
                    const token = response.login.accessToken;
                    localStorage.setItem('token', token);
                    dispatch(setToken(token));
                }
            },
            (error) => {
                console.log(error);
            }
        )
    }
}

export function fetchClickPromo(promos){
    return (dispatch) => {
        Fetch({
            query: newUserPromo,
            variables: JSON.stringify({
                promos: promos
            })
        }, 'api')
        .then(
            (response) => {
                dispatch(setUserPromoCodes(response.editRegUserPromos.promos));
            },
            (error) => {
                console.log(error);
            }
        )
    }
}

export function fetchSubfields(){
    return (dispatch) => {
        Fetch({
            query: getSubfields,
            variables: {}
        }, 'api')
        .then(
            (response) => {
                dispatch(setSubfields(response.subfields));
            },
            (error) => {
                console.log(error);
            }
        )
    }
}

export function fetchChangeServer(server){
    return (dispatch) => {
        Fetch({
            query: changeServer,
            variables: JSON.stringify({
                server: server
            })
        }, 'api')
       .then(
           (response) => {
                dispatch(setServer(server));
           },
           (error) => {
               console.log(error);
           }
       )
    }
}

export function fetchUserPromoCodes(){
    return (dispatch) => {
        Fetch({
            query: getUserPromo,
            variables: {}
        }, 'api')
        .then(
            (response) => {
                dispatch(setUserPromoCodes(response.getRegUserPromo.promos));
           },
           (error) => {
               console.log(error);
           }
        )
    }
}

export function fetchPromoCodes(server){
    return (dispatch) => {
        Fetch({
            query: getPromoCodes,
            variables: JSON.stringify({
                server: server
            })
        }, 'api')
        .then(
            (response) => {
                dispatch(setPromoCodes(response?.promosByServer));
            },
            (error) => {
                console.log(error);
            }
        )
    }
}