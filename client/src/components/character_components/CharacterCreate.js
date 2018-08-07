import React, { Component } from 'react'
import CharacterForm from './CharacterForm';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const FormPageWrapper = styled.div`
    div {
        a {
            h4 {display:none;}
        }
        a:hover {
            text-decoration: none;
            h4 {display: inline;
                font-size: 1.5rem;}
        }
    }
`

export default class CharacterCreate extends Component {
  
    state = {
        newCharacter: {
            name: '',
            occupation: '',
            head_element: 0,
            body_element: 0,
            leg_element: 0,
            color_scheme: 0
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
        await axios.post(`/api/users/${this.props.match.params.user_id}/characters`, this.state.newCharacter)
        this.props.history.push(`/users/${this.props.match.params.user_id}`)
    }

    render() {
    return (
      <FormPageWrapper>
        <CharacterForm character={this.state.newCharacter} submit={this.handleFormSubmit} formChange={this.handleFormChange}></CharacterForm>
        <div>
            <Link to={`/users/${this.props.match.params.user_id}`}>Nevermind<h4>!</h4></Link>
        </div>
      </FormPageWrapper>
    )
  }
}