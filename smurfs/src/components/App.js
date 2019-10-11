import React, { Component } from "react";
import "./App.css";
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';

const monsterReducer = combineReducers({
  smurf: reducers.smurfReducer,
})
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
