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
    getNews,
    setAvatar
} from '../../graphql';

export function fetchLogout(){
    return async (dispatch) => {
        await Fetch({}, 'logout')
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
    return async (dispatch) => {
        await Fetch({
            query: getNews,
            variables: {}
        }, 'api')
        .then(
            (response) => {
                dispatch(setNews(response.getNews.reverse()));
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        )
    };
}

export function fetchNewAvatar(url, ref) {
    return async (dispatch) => {
        await Fetch({
            query: setAvatar,
            variables: JSON.stringify({
                url,
                ref
            })
        }, 'api')
        .then(
            (response) => {
                console.log('ok');
                dispatch(fetchUserInfo());
            },
            (error) => {
                ErrorCatch(error, dispatch);
            }
        );
    };
}

export function fetchNewUserGameInfo(data){
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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
    return async (dispatch) => {
        await Fetch({
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