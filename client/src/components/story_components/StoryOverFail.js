import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import GameLossPrincess from '../konva_shapes/character_shapes/GameLossPrincess'
import GameLossWizard from '../konva_shapes/character_shapes/GameLossWizard'
import DinoHead from '../konva_shapes/character_shapes/DinoHead'
import PrincessBody from '../konva_shapes/character_shapes/PrincessBody'
import WizardBody from '../konva_shapes/character_shapes/WizardBody'
import PrincessLegs from '../konva_shapes/character_shapes/PrincessLegs'
import WizardLegs from '../konva_shapes/character_shapes/WizardLegs'
import GameLossDino from '../konva_shapes/character_shapes/GameLossDino'
import DinoLegs from '../konva_shapes/character_shapes/DinoLegs'
import { Stage, Layer } from "react-konva"
import DinoBody from '../konva_shapes/character_shapes/DinoBody';

const StoryWrapper = styled.div`
    margin: 5vw;
    color: rgb(30,30,30);
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

export default class StoryOverFail extends Component {

  state = {
    story: {},
    characterInUse: {},
    friend: {},
    enemy: {
        name: ''
    },
    mathLy: {
        choices: []
    }
}

componentDidMount = async () => {
   await this.fetchPageInfo()
}

fetchPageInfo = async () => {
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


  render() {

    const selectedCharacterHeadDisplay = (character) => {
      if (character.head_element === 1) {
          return (<GameLossPrincess/>)
      } else if (character.head_element === 2) {
          return (<GameLossWizard/>)
      } else if (character.head_element === 3) { return (<GameLossDino/>) }
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

    return (
      <StoryWrapper>
        <h1>Out of chances, Sorry!</h1>
                        <Stage width={window.innerWidth} height={290}>
                            <Layer>
                                {selectedCharacterBodyDisplay(this.state.characterInUse)}
                                {selectedCharacterHeadDisplay(this.state.characterInUse)}
                                {selectedCharacterLegDisplay(this.state.characterInUse)}
                            </Layer>
                        </Stage>
        <Link to={`/users/${this.props.match.params.user_id}/stories`}>Back to Stories <h4>></h4></Link>
      </StoryWrapper>
    )
  }
}
