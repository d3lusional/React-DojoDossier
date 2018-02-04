import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import { createStore, compose } from 'redux';
import './index.css';
import App from './App';
import store from './state';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';


    


const Root = () => (

    <Provider store={store} >
        <App />
       
    </Provider>
)


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
