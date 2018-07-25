import React, { Component } from 'react'
import CharacterForm from './CharacterForm';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class CharacterUpdate extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        this.fetchCharacter()
    }  
    
    fetchCharacter = async () => {
        const userId =  this.props.match.params.user_id
        try{
            let characterResponse = await axios.get(`/api/users/${userId}/characters/${this.props.match.params.id}`)
            this.setState({
                character: characterResponse.data
            })
        } catch (err){
            console.error(err)
        }
    }

    handleFormChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        const newState = {...this.state}
        newState.character[inputName] = userInput
        this.setState(newState)
    }

    handleFormSubmit =  async (event) => {
        event.preventDefault()
        const charUpdateResponse = await axios.patch(`/api/users/${this.props.match.params.user_id}/characters/${this.state.character.id}`, this.state.character)
        this.props.history.push(`/users/${this.props.match.params.user_id}/characters/${this.state.character.id}`)
    }

    render() {
    return (
      <div>
        <CharacterForm character={this.state.character} submit={this.handleFormSubmit} formChange={this.handleFormChange}></CharacterForm>
        <div>
        <Link to={`/users/${this.props.match.params.user_id}/characters/${this.state.character.id}`}>Nevermind</Link>
        </div>
      </div>
    )
  }
}