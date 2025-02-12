import React, { Component } from "react";
import "./App.css";
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './state/reducers';
import SmurfForm from './Form/SmurfForm';
import SmurfList from './Form/SmurfList';

const monsterReducer = combineReducers({
  smurf: reducers.smurfReducer,
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);


class App extends Component {

  // componentDidMount() {
  //   // console.log(this.props);
    
  //   // this.getter()
  // }

  // // getter = () => {
  // //   console.log('nonsense');
    
  // //   getSmurf()
  // // }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
          <SmurfForm />
          <SmurfList />
        </div>
      </Provider>
    );
  }
}

export default App;
