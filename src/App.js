import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Cupcakes from './components/Cupcakes';
import Frosting from './components/Frosting';
import Contact from './components/Contact';

class App extends Component {
  render() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true} component={Home}></Route>
        <Route path='/cupcakes' exact={true} component={Cupcakes}></Route>
        <Route path='/frosting' exact={true} component={Frosting}></Route>
        <Route path='/contact' exact={true} component={Contact}></Route>
      </Switch>
    </Router>
  )
}
}

export default App;
