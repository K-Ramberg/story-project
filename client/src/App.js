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
  background-color: rgb(150,220,150);
  box-shadow: 2px 2px 4px 2px rgb(3,3,3);
`

const Title = styled.h1`
  &&&{
    color: rgb(241,241,241);
    font-family: 'Work Sans', sans-serif;
    font-size: 10vh;
    @media(min-height: 830px){
      font-size: 70px;
    }
  }
`
const NavOption = styled.h4`
  &&&{
    text-align: right;
    a{
      color: rgb(218, 247, 237);
      font-family: 'Work Sans', sans-serif;
    }
  }
`

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <StyledNav>
            <Navbar.Header>
              <Navbar.Brand>
                <Title>Mathland</Title>
              </Navbar.Brand>
            </Navbar.Header>
                <NavOption><Link to='/'>Home</Link></NavOption>
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