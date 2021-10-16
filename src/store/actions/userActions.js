import { createAction } from '@reduxjs/toolkit';

import {
    SET_PROMOCODES,
    SET_USER_PROMOCODES,
    SET_SERVER,
    SET_SUBFIELDS,
    SET_TOKEN,
    SET_ERRORS,
    SET_USER_INFO,
    SET_NEWS
} from '../types/types';
  
export const setNews = createAction(SET_NEWS, prepare);
export const setUserInfo = createAction(SET_USER_INFO, prepare);
export const setErrors = createAction(SET_ERRORS, prepare);
export const setToken = createAction(SET_TOKEN, prepare);
export const setSubfields = createAction(SET_SUBFIELDS, prepare);
export const setPromoCodes = createAction(SET_PROMOCODES, prepare);
export const setUserPromoCodes = createAction(SET_USER_PROMOCODES, prepare);
export const setServer = createAction(SET_SERVER, prepare);

function prepare(a) {
    return {
        payload: a
    };
}