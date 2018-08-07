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

export default class CharacterUpdate extends Component {

    state = {
        character: {
            name: '',
            occupation: '',
            head_element: 0,
            body_element: 0,
            leg_element: 0,
            color_scheme: 0
        }
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

    passCharacter = async () => {
        let characterResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/characters/${this.props.match.params.id}`)
        const character = await characterResponse.data
        return character
    }

    handleFormChange = (event) => {
        event.preventDefault()
        const inputName = event.target.name
        const userInput = event.target.value
        const newState = {...this.state}
        newState.character[inputName] = userInput
        this.setState(newState)
    }

    handleBodyIndex = (indexVal) => {
        const newState = {...this.state}
        newState.character.body_element = indexVal
        this.setState(newState)
    }

    handleLegIndex = (indexVal) => {
        const newState = {...this.state}
        newState.character.leg_element = indexVal
        this.setState(newState)
    }

    handleFormSubmit =  async (event) => {
        event.preventDefault()
        await axios.patch(`/api/users/${this.props.match.params.user_id}/characters/${this.state.character.id}`, this.state.character)
        this.props.history.push(`/users/${this.props.match.params.user_id}/characters/${this.state.character.id}`)
    }

    render() {
    return (
      <FormPageWrapper>
        <CharacterForm character={this.state.character} passCharacter={this.passCharacter} submit={this.handleFormSubmit} formChange={this.handleFormChange} user={this.props.match.params.user_id} handleLegIndex={this.handleLegIndex} handleBodyIndex={this.handleBodyIndex}></CharacterForm>
        <div>
        <Link to={`/users/${this.props.match.params.user_id}/characters/${this.state.character.id}`}>Nevermind<h4>!</h4></Link>
        </div>
      </FormPageWrapper>
    )
  }
}