import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import PrincessBody from '../konva_shapes/character_shapes/PrincessBody'
import WizardBody from '../konva_shapes/character_shapes/WizardBody'
import PrincessLegs from '../konva_shapes/character_shapes/PrincessLegs'
import WizardLegs from '../konva_shapes/character_shapes/WizardLegs'
import DinoHead from '../konva_shapes/character_shapes/DinoHead'
import DinoLegs from '../konva_shapes/character_shapes/DinoLegs'
import { Stage, Layer } from "react-konva"
import DinoBody from '../konva_shapes/character_shapes/DinoBody';
import PrincessHead from '../konva_shapes/character_shapes/PrincessHead';
import WizardHead from '../konva_shapes/character_shapes/WizardHead';
import WonPie from '../konva_shapes/sub_char_shapes/scenario_shapes/WonPie';
import WonMuffins from '../konva_shapes/sub_char_shapes/scenario_shapes/WonMuffins';


const StoryWrapper = styled.div`
    margin: 5vw;
    color: rgb(30,30,30);
    button {
        margin: 3vh;
        font-size: 2rem;
    }
    h1 {
        color: rgb(240,130,130);
        margin-bottom: 2vh;
    }
    div {
        font-size: 1.5rem;
    }
    .difficulty {
        text-align: center;
        font-size: 2rem;
        color: rgb(100,100,250);
    }
    a{
        margin-top: 3vh;
        display: block;
        font-size: 2rem;
      h4{ display:none;} 
    }
    a:hover{
      text-decoration: none;
      h4{
        display: inline;
        font-size: 1.5rem;
        }
    }
    width: 90vw;
    @media(min-width: 600px){
        width: 560px;
    }
`

export default class StoryComplete extends Component {

  state = {
    story: {
      title:''
    },
    characterInUse: {},
    friend: {},
    enemy: {
        name: ''
    }
  }

  componentDidMount() {
    this.fetchEndInfo()
  }

  fetchEndInfo = async () => {
    try {
      const useCharacter = await this.props.location.state.newState.characterInUse
      const useEnemy = await this.props.location.state.newState.enemy
      const useFriend = await this.props.location.state.newState.friend
      const story =  await this.props.location.state.newState.story
        this.setState({
          story: story,
          characterInUse: useCharacter,
          enemy: useEnemy,
          friend: useFriend
        })
      } catch (err) {
        console.error(err)
      }
  }

  handleEndOfStory = async () => {
    const updateCharacter = {...this.state.characterInUse}
    const pointsEarned = this.handlePointsAwarded(this.state.story.difficulty)
    updateCharacter.stories_completed = updateCharacter.stories_completed + 1
    updateCharacter.points = updateCharacter.points + pointsEarned
    await axios.patch(`/api/users/${this.props.match.params.user_id}/characters/${updateCharacter.id}`, updateCharacter)
    await axios.delete(`/api/users/${this.props.match.params.user_id}/characters/${updateCharacter.id}/stories/${this.props.location.state.story}`)
    await this.props.history.push(`/users/${this.props.match.params.user_id}/characters/${updateCharacter.id}/stories`)
  }

  handlePointsAwarded = (difficulty) => {
    switch (difficulty) {
        case "beginner":
                return 10
            break;
        case "intermediate":
               return 25
            break;
        case "advanced":
               return 50
            break;
    }
  }

  render() {
    
    const selectedCharacterHeadDisplay = (character) => {
      if (character.head_element === 1) {
          return (<PrincessHead/>)
      } else if (character.head_element === 2) {
          return (<WizardHead/>)
      } else if (character.head_element === 3) { return (<DinoHead/>) }
  }

  const selectedCharacterBodyDisplay = (character) => {
      if (character.body_element === 1) {
          return (<PrincessBody/>)
      } else if (character.body_element === 2) {
          return (<WizardBody/>)
      } else if (character.body_element === 3) { return (<DinoBody/>) }
  }

  const selectedCharacterLegDisplay = (character) => {
      if (character.leg_element === 1) {
          return (<PrincessLegs/>)
      } else if (character.leg_element === 2) {
          return (<WizardLegs/>)
      } else if (character.leg_element) { return (<DinoLegs/>) }
  }

  const foodMatch = (title) => {
    if(title.includes("forest")){
        return (<WonMuffins/>)
    } else if(title.includes("castle")){
        return (<WonPie/>)
    }
}

    return (
      <StoryWrapper>
        <h1>WELL DONE!</h1>
          <Stage width={window.innerWidth} height={290}>
                <Layer>
                    {selectedCharacterBodyDisplay(this.state.characterInUse)}
                    {selectedCharacterHeadDisplay(this.state.characterInUse)}
                    {selectedCharacterLegDisplay(this.state.characterInUse)}
                    {foodMatch(this.state.story.title)}
                </Layer>
            </Stage>
        <h1>{this.state.characterInUse.name} will get enjoy this treat!</h1>    
        <button onClick={this.handleEndOfStory}>The End!</button>
      </StoryWrapper>
    )
  }
}