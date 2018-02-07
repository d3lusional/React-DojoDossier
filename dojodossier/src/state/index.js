import {createStore, compose, } from 'redux';
import reducer from './reducers';

export default createStore(
    reducer,
    //console.log("store changed" , createStore.getState())
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
