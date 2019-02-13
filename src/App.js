import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import LoginScreen from './components/LoginScreen'
import MainApp from './components/MainApp'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MainApp} />
          <Route path="/login" component={LoginScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
