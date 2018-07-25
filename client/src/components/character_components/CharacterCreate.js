import React, { Component } from 'react'
import CharacterForm from './CharacterForm';
import axios from 'axios'

export default class CharacterCreate extends Component {
  
    state = {
        newCharacter: {
            name: '',
            occupation: 1,
            head_element: 1,
            body_element: 1,
            leg_element: 1,
            color_scheme: 1
        }
    }
  
    handleFormChange = (event) => {
        const inputName = event.target.name
        const userInput = event.target.value
        const newState = {...this.state}
        newState.newCharacter[inputName] = userInput
        this.setState(newState)
    }

    handleFormSubmit =  async (event) => {
        event.preventDefault()
        const newCharResponse = await axios.post(`/api/users/${this.props.match.params.user_id}/characters`, this.state.newCharacter)
        this.props.history.push(`/users/${this.props.match.params.user_id}`)
    }

    render() {
    return (
      <div>
        <CharacterForm character={this.state} submit={this.handleFormSubmit} formChange={this.handleFormChange}></CharacterForm>
      </div>
    )
  }
}