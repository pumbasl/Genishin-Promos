import {
    SET_ADMIN_USERS
  } from '../types/types';
    
  import initialState from '../initialStateAdmin';
    
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ADMIN_USERS:
        return {
          ...state,
          users: action.payload
        };
  
      default:
        return state;
    }
  };
    
  export default adminReducer;