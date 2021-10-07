import {
    SET_ADMIN_USERS
} from '../types/types';

export const setUsers = (users) => {
    return {
        type: SET_ADMIN_USERS,
        payload: users
    };
}