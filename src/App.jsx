import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';

// 1. fucntion that returns the initial state:
// it takes reducers as arguments
const combinedState = combineReducers({ mentalHealth, physicalHealth });

// the result should be the same as this simple fn below:
// function combinedState() {
//   return {
//     mentalHealth: 100,
//     physicalHealth: 100,
//   };
// }

// 4. function that will take a state and a yell(action)
// this function HAVE TO BE PURE!
// these are REDUCERS
function mentalHealth(state = 100, action) {
  switch (action.type) {
    case 'WATCH_THE_NEWS':
      return state - 10;
    case 'WIN_THE_LOTTERY':
      return state + 20;
    default:
      return state;
  }
}

function physicalHealth(state = 100, action) {
  switch (action.type) {
    case 'SLIP_ON_BANANA_PEEL':
      return state - 10;
    case 'WIN_THE_LOTTERY':
      return state + 10;
    default:
      return state;
  }
}


// 2. creates state object in REDUX
const store = createStore(
  combinedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


// 3. we need to wrap our app in a Provider
// Provider takes a createStore prop
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
