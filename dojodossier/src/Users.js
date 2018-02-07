import React, { Component } from 'react';
import './App.css';


const mapStateToProps = (state) => {
    console.log("hi from state to props")
    console.log(state.userList)
    console.log("this props")
    console.log(this.props)
  
    return {
  
      newUser: state.newUser,
      userList: state.userList,
    }
  }



class Users extends Component {
    

    //const filteredUserTasks = this.props.userList.
    render() {
        return (
            <div className="users" >
                  <div className="row">
                        <ol>
                            <li> stuff stuff stuff </li>
                            <li> stuff stuff stuff </li>

                        </ol>
                    </div>
                <div className="row">
                    <div>
                        <input type="text" />
                        <button>Add</button>
                    </div>
                </div>
            </div>

        )

    }
}

  
export default Users;