import { usersList, getCurrentUsers } from "./actions";

// export const NEWUSER = 'lsdakfj';
// export const ADD_NEW_USER = [];
// export const SWITCH_USER = 'asdf'


const initialState = {
   
    activeUser: 'bob',
    newUser: '',
    userList: [
        {
            userName:'',
            userTask:[],
        }
    ],
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case 'NEWUSER' :
            //console.log('NewUser Switch')
            //console.log(action.payload)
            return {...state, newUser: action.payload}
        case 'ADD_NEW_USER':
            console.log('user list')
            console.log(action.payload)
            return {...state, userList: state.userList.concat(
                    [{
                        userName: action.payload,
                        userTask: []
                    }])
                
                }
        case 'SWITCH_USER':
            console.log('SWITCH USER')
            console.log(action.payload)
            return {...state, activeUser: action.payload}
        // case 'LIST_USERS':
        // console.log('list users')
        // console.log(state.userList)

        // return {
        //         ...state, 
        //             userList: state.userList.map( item =>
        //         {
        //             userName: item.name
        //         })
        //         }
        case 'GET_USER_LIST':
                console.log('get user list')
                console.log(state.userList)
            //return {...state, usersList: usersList}
            return {...state, usersList: 'Bob'}
        
        default:
            return state
    }
}
        
export default reducer