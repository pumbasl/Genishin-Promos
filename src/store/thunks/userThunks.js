import {
    setPromoCodes,
    setServer,
    setUserPromoCodes,
    setSubfields,
    setToken,
    setErrors,
    setUserInfo,
    setNews
} from '../actions/userActions';

import Fetch from '../../fetch/fetch';

import {
    getPromoCodes,
    changeServer,
    getUserPromo,
    getSubfields,
    newUserPromo,
    login as loginQuery,
    registration,
    regUser,
    UserGameInfo,
    getNews
} from '../../graphql';

export function fetchLogout(){
    return (dispatch) => {
        Fetch({}, 'logout')
        .then(
            (response) => {
                delete localStorage.token;
                dispatch(setToken(null));
                dispatch(setUserPromoCodes([]));
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        )
    };
}

export function fetchNews(){
    return (dispatch) => {
        Fetch({
            query: getNews,
            variables: {}
        }, 'api')
        .then(
            (response) => {
                dispatch(setNews(response.getNews));
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        )
    };
}

export function fetchNewUserGameInfo(data){
    return (dispatch) => {
        Fetch({
            query: UserGameInfo,
            variables: JSON.stringify(data)
        }, 'api')
        .then(
            (response) => {
                console.log('ok');
            },

            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchUserInfo(){
    return (dispatch) => {
        Fetch({
            query: regUser,
            variables: {}
        }, 'api')
        .then(
            (response) => {
                dispatch(setUserInfo(response.regUser));
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchRegistration(data){
    const { login, password, server } = data;
    return (dispatch) => {
        Fetch({
            query: registration,
            variables: JSON.stringify({
                login: login,
                password: password,
                server: server,
                ua: window.navigator.userAgent
            })
        }, 'api')
        .then(
            (response) => {
                if(response?.error){
                    dispatch(setErrors(response.message));
                } else {
                    const token = response.registration.accessToken;
                    localStorage.setItem('token', token);
                    dispatch(setToken(token));
                }
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    }
}

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
                ErrorCatch(error, dispatch);
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
                ErrorCatch(error, dispatch);
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
                ErrorCatch(error, dispatch);
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
                ErrorCatch(error, dispatch);
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
                ErrorCatch(error, dispatch);
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
                ErrorCatch(error, dispatch);
            }
        )
    }
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