// export const NEWUSER = 'lsdakfj';
// export const USERSLIST = [];
// export const SWITCH_USER = 'asdf'


const initialState = {
   
    activeUser: '',
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
            console.log('NewUser Switch')
            console.log(action.payload)
            return {...state, newUser: action.payload}
        case 'ADDUSER':
            console.log('user list')
            //console.log(action.payload)
            return {...state, userList: state.userList.concat(
                    {
                    userList: {
                        userName: action.payload,
                        userTask: []
                        }
                    })
                
                }
        case 'SWITCH_USER':
            //console.log('user list')
            //console.log(action.payload)
            return {...state, activeUser: action.payload}
        case 'TBD':
            return {
                userList: {
                    userName: action.payload
                    }
                }
            

        default:
            return state
    }
}
        
export default reducer