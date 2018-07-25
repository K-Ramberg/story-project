import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from './components/HomePage';
import UserShow from './components/user_components/UserShow';
import CharacterShow from './components/character_components/CharacterShow';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
       <h1>I'm here now at app.js</h1>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/users/:id' component={UserShow}/>
          <Route exact path='/users/:user_id/characters/:id' component={CharacterShow}/>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
