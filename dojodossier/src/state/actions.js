//import { ADDUSER } from "../index";
//import { NEWUSER } from '../index';

export function switchUser(payload) {
    return {
        type: 'SWITCH_USER',
        payload
    }
}

export const createUser = (payload) => {
    return {
        type: 'ADD_NEW_USER',
        payload
    }
}

export const newUser = (payload) => {
    return {
        type: 'NEWUSER',
        payload
    }
}

export const getUsers = (payload) => {
    return {
        type: 'GET_USER_LIST',
        payload
    }
}