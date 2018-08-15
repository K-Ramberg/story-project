import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import PrincessHead from '../konva_shapes/character_shapes/PrincessHead';
import WizardHead from '../konva_shapes/character_shapes/WizardHead'
import DinoHead from '../konva_shapes/character_shapes/DinoHead'
import { Stage, Layer } from "react-konva";

const Welcome = styled.div`
    margin: 5vw;
    margin-top: 2vh;
    color: rgb(30,30,30);
`

const CharIndex = styled.div`
  div{
    margin-top: 1vh;
    a{
      h4{ display:none;} 
      font-size: 2rem;
    }
    a:hover{
      text-decoration: none;
      h4{
        display: inline;
        font-size: 1.5rem;
        }
    }
  }
  .character {
    font-size: 3rem;
    margin-top: none;
    a {
      color: rgb(240,130,130);
      }
    a:hover{
      h4 {
        font-size: 1.5rem;
      }
    }  
  }
  .storyNav { 
        h4{ display:none;} 
        font-size: 2.5rem;
        background-color: rgb(218, 247, 166);
        padding: 1vh;
        box-shadow: 2px 2px 4px 2px rgb(3,3,3);
      }
      a:hover{
        text-decoration: none;
        h4{
          display: inline;
          font-size: 2rem;
          }
      }
`

export default class UserShow extends Component {

  state= {
    user: {},
    characters: []
}

componentDidMount() {
    this.fetchCharacter()
}  

fetchCharacter = async () => {
  const userId =  this.props.match.params.id
  try{
      let userResponse = await axios.get(`/api/users/${userId}`)
      let characterResponse = await axios.get(`/api/users/${userId}/characters`)
      this.setState({
          user: userResponse.data,
          characters: characterResponse.data
      })
  } catch (err){
      console.error(err)
  }
}

  render() {  

    const selectedCharacterHeadDisplay = (character) => {
      if(character.head_element === 1){
          return(<PrincessHead/>)
      } else if (character.head_element === 2){
          return(<WizardHead/>)
      } else if(character.head_element === 3){ return(<DinoHead/>)}
  }

    const characterMap = this.state.characters.map((char) => {
      let userId = this.state.user.id
      if (char.occupation === "Princess") {
        return(
          <div className="character" key={char.id}><Link to={`/users/${userId}/characters/${char.id}`}>{char.occupation} {char.name} <h4>></h4></Link>
          <Stage width={400} height={100}>
            <Layer>
                {selectedCharacterHeadDisplay(char)}
            </Layer>
          </Stage>
          </div>
        )
      }
      else if (char.occupation === "Wizard" || char.occupation === "Dinosaur"){
        return(
          <div className="character" key={char.id}><Link to={`/users/${userId}/characters/${char.id}`}>{char.name} the {char.occupation} <h4>></h4></Link>
          <Stage width={400} height={115}>
            <Layer>
              {selectedCharacterHeadDisplay(char)}
            </Layer>
          </Stage>
          </div>
        ) 
      }
    })

    return (
      <Welcome>
       <CharIndex>
          <h3>{this.state.user.name} Characters</h3>  
          <div><Link to={`/users/${this.state.user.id}/characters/new`}>Create a new Character <h4>></h4></Link></div>
          {characterMap} 
        </CharIndex>
      </Welcome>
    )
  }
}
