import { createReducer } from '@reduxjs/toolkit';

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
  
import initialState from '../initialStateClient';

const clientReducer = createReducer(initialState, (clientReducer) => {
  clientReducer
    .addCase(SET_NEWS, (state, action) => {
      state.news = action.payload;
    })

    .addCase(SET_USER_INFO, (state, action) => {
      state.userinfo = action.payload;
    })

    .addCase(SET_ERRORS, (state, action) => {
      state.errorsAuth = action.payload;
    })

    .addCase(SET_TOKEN, (state, action) => {
      state.token = action.payload;
    })

    .addCase(SET_SUBFIELDS, (state, action) => {
      state.subfields = action.payload;
    })

    .addCase(SET_SERVER, (state, action) => {
      state.server = action.payload;
    })

    .addCase(SET_USER_PROMOCODES, (state, action) => {
      state.userPromocodes = action.payload;
    })

    .addCase(SET_PROMOCODES, (state, action) => {
      state.promocodes = action.payload;
    })

    .addDefaultCase((state, action) => {
      return state;
    })
});
  
export default clientReducer;