import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';






import {createStore} from 'redux';

// Action
const increment = () => {
  return {
    type: "INCREMENT"
  }
}
const decremnet  = () => {
  return {
    type: "DECREMENT"
  }
}

//Reducers

 const counter =(state=0,action)=>{
    if(action.type=="INCREMENT")
    {
      return state +1
    }
     if(action.type =="DECREMENT")
     {
      return state -1

     }
      else{
         return state
      }
 }

//store 
 let store = createStore(counter)

  store.subscribe(()=>{console.log(store.getState())})
   







  store.subscribe(()=>{console.log(store.getState())})
    store.dispatch(increment())
    store.dispatch(decremnet())








ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
