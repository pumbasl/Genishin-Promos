import {
    SET_PROMOCODES,
    SET_USER_PROMOCODES,
    SET_LOADING_START,
    SET_SERVER,
    SET_SUBFIELDS,
    SET_TOKEN,
    SET_ERRORS,
    SET_USER_INFO
} from '../types/types';

export const setUserInfo = (data) => {
    return {
        type: SET_USER_INFO,
        payload: data
    };
}

export const setErrors = (errors) => {
    return {
        type: SET_ERRORS,
        payload: errors
    };
}

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    };
}

export const setSubfields = (data) => {
    return {
        type: SET_SUBFIELDS,
        payload: data
    };
};

export const setPromoCodes = (data) => {
    return {
        type: SET_PROMOCODES,
        payload: data
    };
};

export const setUserPromoCodes = (data) => {
    return {
        type: SET_USER_PROMOCODES,
        payload: data
    };
};

export const setServer = (server) => {
    return {
        type: SET_SERVER,
        payload: server
    };
}

export const setLoading = ({ bool }) => {
    return {
      type: SET_LOADING_START,
      payload: bool,
    };
  };
  