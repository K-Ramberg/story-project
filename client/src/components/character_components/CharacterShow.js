import React, { Component } from 'react'
import axios from 'axios'

export default class CharacterShow extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        this.fetchCharacter()
    }  
    
    fetchCharacter = async () => {
        const userId =  this.props.match.params.usder_id
        const characterId =  this.props.match.params.id
        try{
            let characterResponse = await axios.get(`/api/users/${userId}/characters/${characterId}`)
            this.setState({
                character: characterResponse.data
            })
        } catch (err){
            console.error(err)
        }
    }

  render() {
      const characterDisplay = (character) => {if (character.occupation === "Princess") {
        return(
          <div key={character.id}>{character.occupation} {character.name}</div>
        )
      }
      else if (character.occupation === "Wizard" || character.occupation === "Dinosaur"){
        return(
          <div key={character.id}>{character.name} the {character.occupation}</div>
        ) 
      }
    }
    return (
      <div>
          {characterDisplay(this.state.character)}
      </div>
    )
  }
}