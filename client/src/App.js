import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
       <h1>I'm here now at app.js</h1>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
