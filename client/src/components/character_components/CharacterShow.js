import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CharacterShow extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        this.fetchCharacter()
    }  
    
    fetchCharacter = async () => {
        const userId =  this.props.match.params.user_id
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
          <Link to={`/users/${this.props.match.params.user_id}`}>Go back to your characters</Link>
      </div>
    )
  }
}