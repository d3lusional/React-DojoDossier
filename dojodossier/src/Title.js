import React, { Component } from 'react';
import {
  usersList, newUser, createUser
} from './state/actions'
import {
  NEWUSER,
  ADDUSER,
  SWITCH_USER
} from './state/actions';
import {connect} from 'react-redux'; 

const mapStateToProps = (state) => {
  console.log("hi from state to props")
  return {
    newUser: state.newUser,
    usersList: state.usersList,
  }
}


const mapDispatchToProps = (dispatch) => {
  console.log("hi from dispatch")
  return {
    
    userList: function(userList){
      dispatch(
        {
          type: 'ADDUSER',
          payload : userList
        }
      )
    },
    newUserAdd: function(newUserAdd){
      dispatch(
        {
          type: 'NEWUSER',
          payload: newUserAdd
        }
      )
    },
    createUser: event => dispatch(createUser(event.target.value))
    
  }
}



class Title extends Component {


  handleAddUser(newUser) {
    console.log("hello from handleAddUser")
    let newUserObj = {
        userName:'newUser',
        userTask:[],
    }
    console.log(newUser.target.value)
    this.props.createUser(newUser)

  }

    render() {
      return (
        <div className="Title" >
            <div>
              <input type="text" value={this.props.newUser} onChange={event => this.props.newUserAdd(event.target.value)} />
            </div>
            <div>
              <button value={this.props.newUser} onClick={this.handleAddUser.bind(this)}>Add User</button>
            </div>
            <div >
                <ol className="usersNav">
                
                {/* {filteredUsers.map((user, index)=> {
                  return <li key={index} onClick={ () => this.props.userSelected(user) } > {user.name} </li>
                })} */}
              
                </ol>
            </div>

        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Title);