import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";


function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path='/home' component={Home}/> 
      </Switch>
</Router>
  );
}

export default App;
