import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './components/HomePage';
import UserShow from './components/user_components/UserShow';
import CharacterShow from './components/character_components/CharacterShow';
import CharacterCreate from './components/character_components/CharacterCreate';
import CharacterUpdate from './components/character_components/CharacterUpdate';
import StoryIndex from './components/story_components/StoryIndex';
import StoryShow from './components/story_components/StoryShow';
import PageShow from './components/page_components/PageShow';
import StoryOverFail from './components/story_components/StoryOverFail';
import StoryComplete from './components/story_components/StoryComplete';
import { Navbar } from 'react-bootstrap'

const StyledNav= styled(Navbar)`
  background-color: rgb(180,230,180);
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StyledNav>
            <Navbar.Header>
              <Navbar.Brand>
                <h1>Mathland</h1>
              </Navbar.Brand>
            </Navbar.Header>
                <h4><Link to='/'>Home</Link></h4>
          </StyledNav>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/users/:id' component={UserShow} />
            <Route exact path='/users/:user_id/characters/new' component={CharacterCreate} />
            <Route exact path='/users/:user_id/characters/:id' component={CharacterShow} />
            <Route exact path='/users/:user_id/characters/:id/edit' component={CharacterUpdate} />
            <Route exact path='/users/:user_id/stories' component={StoryIndex} />
            <Route exact path='/users/:user_id/stories/oops' component={StoryOverFail} />
            <Route exact path='/users/:user_id/stories/finished' component={StoryComplete} />
            <Route exact path='/users/:user_id/stories/:id' component={StoryShow} />
            <Route exact path='/users/:user_id/stories/:story_id/pages/:id' component={PageShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;