import { ADDUSER } from "../index";
import { NEWUSER } from '../index'

export function switchUser(payload) {
    return {
        type: 'SWITCH_USER',
        payload
    }
}

export const createUser = (payload) => {
    return {
        type: 'ADDUSER',
        payload
    }
}

export const newUser = (payload) => {
    return {
        type: 'NEWUSER',
        payload
    }
}
