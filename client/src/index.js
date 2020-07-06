import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import allReducer from './Redux/reducers/allReducer';


const mystore = createStore(allReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
   <Provider store={mystore}> 
     <App /> 
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


