import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import { EnemyGenerate, FriendGenerate, ThemeGenerate } from './SubCharacterGenerate';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Selector = styled.div`
        font-size: 20px;
        font-weight: 700;
    button {
        height: 25px;
    }
    .less {
        background-color: green;
    }
    .more {
        background-color: red;
    }
`

export default class StoryShow extends Component {

    state = {
        characters: [],
        characterInUse: '',
        story: {},
        pages: [],
        firstPage: {},
        enemy: {},
        friend: {
            name: ''
        }
    }

    componentDidMount() {
        this.fetchStoryAndPages()
    }

    fetchStoryAndPages = async () => {
        const userId = this.props.match.params.user_id
        try {
            const storyResponse = await axios.get(`/api/users/${userId}/stories/${this.props.match.params.id}`)
            const pagesResponse = await axios.get(`/api/users/${userId}/stories/${this.props.match.params.id}/pages`)
            const charactersResponse = await axios.get(`/api/users/${userId}/characters`)
            this.setState({
                characters: charactersResponse.data,
                story: storyResponse.data,
                pages: pagesResponse.data
            })
            const setFirstPage = await this.setFirstPage()
        } catch (err) {
            console.error(err)
        }
    }

    setFirstPage = () => {
        const firstPage = {...this.state.pages[0]}
        this.setState({ firstPage })
    }

    handleFriendAdd = (event) => {
        event.preventDefault()
        if (this.state.friend.name === '') {
            const friendName = FriendGenerate()
            this.setState({
                friend: {
                    name: friendName
                }
            })
        }
    }

    handleStoryStart = () => {
        if (this.state.characterInUse !== ''){
        const enemyName = EnemyGenerate()
        const themeResult = ThemeGenerate()
        this.state.pages[0].completed = true
        this.setState({
            enemy: { name: enemyName },
            story: { title: this.state.story.title, difficulty: this.state.story.difficulty, theme: themeResult },
        })} 
    }

    handleIncreaseDifficulty = (event) => {
        switch (this.state.story.difficulty) {
            case "beginner":
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "intermediate" }
                })
                break;
            case "intermediate":
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "advanced" }
                })
                break;
            case 3:
                break;
        }
    }

    handleDecreaseDifficulty = (event) => {
        switch (this.state.story.difficulty) {
            case "advanced":
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "intermediate" }
                })
                break;
            case "intermediate":
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "beginner" }
                })
                break;
            case "beginner":
                break;
        }
    }

    handleCharacterSelect = (character) => {
        let useCharacter = {...this.state.characterInUse}
        useCharacter = character
        this.setState({
            characterInUse: useCharacter
        })
    }

    handleDifficultyUpdate = async () => {
        const newDifficulty = {...this.state.story}
        await axios.patch(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}}`, newDifficulty)
    } 

    render() {
        
        const sortByPageNumber = _.sortBy(this.state.pages,['page','number'])
        

        const pageMap = sortByPageNumber.map((page) => {
            return (
                <div key={page.id}>{page.completed === false ?
                    <div>Page {page.number}</div>
                    : <div>
                        <Link onClick={this.handleDifficultyUpdate} to={{ pathname:`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}/pages/${page.id}`,
                                    state: { newState: this.state }
                                }}>
                                Page {page.number}
                            </Link>
                      </div>}
                </div>
            )
        })


        const characterDisplay = (character) => {if (character.occupation === "Princess") {
            return(
              <div key={character.id} onClick={()=> this.handleCharacterSelect(character)}>{character.occupation} {character.name}</div>
            )
          }
          else if (character.occupation === "Wizard" || character.occupation === "Dinosaur"){
            return(
              <div key={character.id} onClick={()=> this.handleCharacterSelect(character)}>{character.name} the {character.occupation}</div>
            ) 
          }
        }

        const characterMap = this.state.characters.map((character) => {
                    return(
                        <div key={character.id}>{characterDisplay(character)}</div>
                    )
        })

        const startOrContinue = () => {
            if(this.state.firstPage.number > 1){
                return 'Continue Story'
            } else { return 'Start Story'}
        }

        const selectedCharacterHeadDisplay = (character) => {
                // if(character.head_element === 1){
                //     return(<StyleWrapper><PrincessHead/></StyleWrapper>)
                // } else if (character.head_element === 2){
                //     return(<StyleWrapper><WizardHead/></StyleWrapper>)
                // } else if(character.head_element === 3){ return(<StyleWrapper><DinoHead/></StyleWrapper>)}
        }

        const selectedCharacterBodyDisplay = (character) => {
            // if(character.body_element === 1){
            //     return(<StyleWrapper><PrincessBody/></StyleWrapper>)
            // } else if (character.body_element === 2){
            //     return(<StyleWrapper><WizardBody/></StyleWrapper>)
            // } else if(character.body_element === 3){ return(<StyleWrapper><DinoBody/></StyleWrapper>)}
        }

        const selectedCharacterLegDisplay = (character) => {
            // if(character.leg_element === 1){
            //     return(<StyleWrapper><PrincessLegs/></StyleWrapper>)
            // } else if (character.leg_element === 2){
            //     return(<StyleWrapper><WizardLegs/></StyleWrapper>)
            // } else if(character.leg_element ){ return(<StyleWrapper><DinoLegs/></StyleWrapper>)}
        }

        return (
            <div>
                <h1>{this.state.story.title}</h1>
                <Link to={`/users/${this.props.match.params.user_id}/stories`}>back to stories</Link>
                <Selector>Difficulty: <button className="less" onClick={this.handleDecreaseDifficulty}></button>
                    {this.state.story.difficulty}
                    <button className="more" onClick={this.handleIncreaseDifficulty}></button></Selector>
                <h5>---Pick a Character to Use---</h5>
                    {characterMap}
                <h2>selected Character:</h2>
                    {selectedCharacterHeadDisplay(this.state.characterInUse)}
                    {selectedCharacterBodyDisplay(this.state.characterInUse)}
                    {selectedCharacterLegDisplay(this.state.characterInUse)}
                <button onClick={this.handleStoryStart}>{startOrContinue()}</button>
                <div>{pageMap}</div>
            </div>
        )
    }
}