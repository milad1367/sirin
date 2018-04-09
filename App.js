import React,{ Component } from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Index from './src/components/Index';
import reducer from './src/reducers';
import Expo from 'expo';

const initialState = { 
  StepsChecker: {steps: 0 , count: 0 , status: ""},
  Session: { start: false, end: false} ,
  FinalSteps: { PedoSteps: 0 , RealSteps: 0 },
};

const store = createStore(
  reducer,initialState,
  applyMiddleware(thunk)
);
//const store = createStore(reducer,initialState);

console.log(store.getState());
store.subscribe( () => {
  console.log(store.getState());
});

export default class App extends React.Component {
   // for any test use index.js
  render() {
    return(
        <Provider store={store}>
          <Index />
        </Provider>
    )
  }
}

