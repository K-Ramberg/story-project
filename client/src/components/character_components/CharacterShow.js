import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PrincessHead from '../konva_shapes/character_shapes/PrincessHead';
import WizardHead from '../konva_shapes/character_shapes/WizardHead' 
import DinoHead from '../konva_shapes/character_shapes/DinoHead'
import PrincessBody from '../konva_shapes/character_shapes/PrincessBody';
import WizardBody from '../konva_shapes/character_shapes/WizardBody';
import PrincessLegs from '../konva_shapes/character_shapes/PrincessLegs';
import WizardLegs from '../konva_shapes/character_shapes/WizardLegs';
import DinoBody from '../konva_shapes/character_shapes/DinoBody';
import DinoLegs from '../konva_shapes/character_shapes/DinoLegs';
import { Stage, Layer } from "react-konva";

const CharName = styled.div`
    color: rgb(240,130,130);
    font-size: 3rem;
`

export default class CharacterShow extends Component {

    state = {
        character: {}
    }

    componentDidMount() {
        this.fetchCharacter()
    }

    fetchCharacter = async () => {
        const userId = this.props.match.params.user_id
        const characterId = this.props.match.params.id
        try {
            let characterResponse = await axios.get(`/api/users/${userId}/characters/${characterId}`)
            this.setState({
                character: characterResponse.data
            })
        } catch (err) {
            console.error(err)
        }
    }

    characterDelete = async (id) => {
        await axios.delete(`/api/users/${this.props.match.params.user_id}/characters/${id}`)
        this.props.history.push(`/users/${this.props.match.params.user_id}`)
    }

    render() {
        const characterDisplay = (character) => {
            if (character.occupation === "Princess") {
                return (
                    <div key={character.id}>{character.occupation} {character.name}</div>
                )
            }
            else if (character.occupation === "Wizard" || character.occupation === "Dinosaur") {
                return (
                    <div key={character.id}>{character.name} the {character.occupation}</div>
                )
            }
        }

        const selectedCharacterHeadDisplay = (character) => {
            if(character.head_element === 1){
                return(<PrincessHead/>)
            } else if (character.head_element === 2){
                return(<WizardHead/>)
            } else if(character.head_element === 3){ return(<DinoHead/>)}
        }

        const selectedCharacterBodyDisplay = (character) => {
            if(character.body_element === 1){
                return(<PrincessBody/>)
            } else if (character.body_element === 2){
                return(<WizardBody/>)
            } else if(character.body_element === 3){ return(<DinoBody/>)}
        }

        const selectedCharacterLegDisplay = (character) => {
            if(character.leg_element === 1){
                return(<PrincessLegs/>)
            } else if (character.leg_element === 2){
                return(<WizardLegs/>)
            } else if(character.leg_element ){ return(<DinoLegs/>)}
        }

        return (
            <div>
                <CharName>
                    {characterDisplay(this.state.character)}
                </CharName>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        {selectedCharacterLegDisplay(this.state.character)}
                        {selectedCharacterBodyDisplay(this.state.character)}
                        {selectedCharacterHeadDisplay(this.state.character)}
                    </Layer>
                </Stage>
                <div><Link to={`/users/${this.props.match.params.user_id}/characters/${this.state.character.id}/edit`}>Change up your character</Link></div>
                <div><button onClick={() => this.characterDelete(this.state.character.id)}>Remove character</button></div>
                <Link to={`/users/${this.props.match.params.user_id}`}>Go back to your characters</Link>
            </div>
        )
    }
}