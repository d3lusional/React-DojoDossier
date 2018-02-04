import React, { Component } from 'react';
import './App.css';
import './ui-toolkit/css/nm-cx/main.css'
import {connect} from 'react-redux';
import {
  switchUser,
  usersList,
} from './state/actions';
import { Provider } from 'react-redux';
import Title from './Title';
import Users from './Users';


export default function(props)  {
    return (
      <div className="App">

          <Title />

          <Users />

      </div>
    )
  }

