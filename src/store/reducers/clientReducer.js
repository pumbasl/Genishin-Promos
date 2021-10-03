import {
  SET_PROMOCODES,
  SET_USER_PROMOCODES,
  SET_SERVER,
  SET_LOADING_START,
  SET_SUBFIELDS,
  SET_TOKEN,
  SET_ERRORS
} from '../types/types';
  
import initialState from '../initialState';
  
const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        errorsAuth: action.payload
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case SET_SUBFIELDS:
      return {
        ...state,
        subfields: action.payload
      };

    case SET_SERVER:
      return {
        ...state,
        server: action.payload
      };

    case SET_USER_PROMOCODES:
      return {
        ...state,
        userPromocodes: action.payload
      };

    case SET_PROMOCODES:
      return {
        ...state,
        promocodes: action.payload
      };
      
    case SET_LOADING_START:
    return {
      ...state,
      loading: true,
    };

    default:
      return state;
  }
};
  
export default clientReducer;