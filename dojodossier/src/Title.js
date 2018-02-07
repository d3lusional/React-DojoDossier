import React, { Component } from 'react';
import {
  usersList, newUser, createUser
} from './state/actions'
import {
  NEWUSER,
  ADDUSER,
  SWITCH_USER,
  SEARCH,
  LIST_USERS,
  GET_USER_LIST,
} from './state/actions';
import {connect} from 'react-redux'; 

const mapStateToProps = (state) => {
  console.log("hi from state to props")
  console.log(state.userList)
  
  return {
    activeUser: state.activeUser,
    newUser: state.newUser,
    userList: state.userList,
  }
  console.log("current props")
  console.log(this.props)
}



//const { userName, userTask} = this.props.userList

const mapDispatchToProps = (dispatch) => {
  console.log("hi from dispatch")
  return {
    addToUserList: function(addToUserList){
      dispatch(
        {
          type: 'ADD_NEW_USER',
          payload : addToUserList
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
    createUser: event => dispatch(createUser(event.target.value)),

    getUsers: function(usersList) { 
      console.log(usersList)
        dispatch(
          {
            type: 'GET_USER_LIST',
            payload: usersList
          }
        )
      },
      switchUser: function(activeUser){
          console.log("this is activeUser")
          console.log(activeUser)
            dispatch(
              {
                type: 'SWITCH_USER',
                payload: activeUser
              }
            )
      }
    }
  }




class Title extends Component {

  updateCurrentUser(userName){
    //let activeUser = currentUser
    this.props.switchUser(userName)
  }

  handleAddUser(newUser) {
    //console.log("hello from handleAddUser")
    let newUserObj = {
        userName:'newUser',
        userTask:[],
    }
    //console.log(newUser.target.value)
    this.props.createUser(newUser)

  }

  renderUsersList(usersList,){
    console.log("renderUsers")
    console.log(this.props.usersList)
  }

    render() {

console.log("props refreshed user list...")
console.log(this.props.userList)
      
      return (
        <div className="card">
        
        <div className="Title" >
            <div>
              <input type="text" value={this.props.newUser} onChange={event => this.props.newUserAdd(event.target.value)} />
            </div>
            <div>
              <button value={this.props.newUser} onClick={this.handleAddUser.bind(this)}>Add User</button>
            </div>
            <div >
                <ul className="tabs">
                {/* <li className="tab-title active"><button>Summary</button></li> */}
                {
                  this.props.userList && this.props.userList.map( (user) => (<li class="tab-title active" onClick={() =>  this.updateCurrentUser (user.userName)} value={user.userName}><button>{user.userName}</button></li>))

                }
           
                
                {/* 
                <li class="tab-title" onClick={this.renderUsersList.bind(this)}><button>Bob</button></li>

                {filteredUsers.map((user, index)=> {
                  return <li key={index} onClick={ () => this.props.userSelected(user) } > {user.name} </li>
                })} */}
              
                </ul>
            </div>

        </div>
        </div>
      );
    }
  }
  

   /*

   <div class="card">
    <!-- Card content goes here -->
    <h5>This is a card.</h5>
    <p>Content goes here.</p>
</div>
   */
  export default connect(mapStateToProps, mapDispatchToProps)(Title);