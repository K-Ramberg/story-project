import React, { Component } from 'react'
import axios from 'axios'
import { EnemyGenerate, FriendGenerate, ThemeGenerate } from './SubCharacterGenerate';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
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

const StoryWrapper = styled.div`
    margin: 5vw;
    color: rgb(30,30,30);
    h2 {
        color: rgb(240,130,130);
        margin-bottom: 5vh;
        text-align: center;
    }
    h5 {
        margin-left: 16vw;
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
        margin-top: -3vh;
        margin-bottom: 3vh;
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
    button {
        font-size: 2rem;
        color: rgb(100,100,250);
        margin-top: 1vh;
        margin-left: 27vw; 
        text-align: center;
        @media(min-width:745px){
            margin-left: 205px;
        }
    }
    .dont_show {
        display: none;
    }
    width: 90vw;
    @media(min-width: 600px){
        width: 560px;
    }
    .inline {
        display: inline;
    }
`

const CarouselWrapper = styled.div`
    .carousel-inner {
        margin-top: 2vh;
        height: 55px;
        text-align:center;
        div {
            margin-top: 3vh;
            font-size: 2rem;
        }
        margin-bottom: 4vh;
    }
    .carousel-control{
        height: 70px;
        margin-top: 0;
    }
    .carousel-indicators{
        display: none;
    }
`

export default class StoryShow extends Component {

    state = {
        characterInUse: '',
        story: {
            enemy: '',
            enemy_gender: '',
            enemy_prefix: ''
        },
        pages: [],
        firstPage: {},
        enemy: {},
        friend: {
            name: ''
        },
        index: 0,
        direction: null
    }

    componentDidMount = async () => {
        await this.fetchStoryAndPages()
    }

    fetchStoryAndPages = async () => {
        const userId = this.props.match.params.user_id
        const characterId = this.props.match.params.character_id
        const storyId = this.props.match.params.id
        try {
            const storyResponse = await axios.get(`/api/users/${userId}/characters/${characterId}/stories/${storyId}`)
            const pagesResponse = await axios.get(`/api/users/${userId}/characters/${characterId}/stories/${storyId}/pages`)
            const characterResponse = await axios.get(`/api/users/${userId}/characters/${characterId}`)
            this.setState({
                characterInUse: characterResponse.data,
                story: storyResponse.data,
                pages: pagesResponse.data,
                enemy: {
                    name: storyResponse.data.enemy,
                    gender: storyResponse.data.enemy_gender,
                    prefix: storyResponse.data.enemy_prefix
                }
            })
            await this.setFirstPage()
        } catch (err) {
            console.error(err)
        }
    }

    setFirstPage = () => {
        const firstPage = { ...this.state.pages[0] }
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

    handleStoryStart = async () => {
        if (this.state.firstPage.number === 1) {
            const enemy = await EnemyGenerate()
            const themeResult = await ThemeGenerate()
            await this.handleStoryEnemyUpdate(enemy)
            await this.handleDifficultyUpdate()
            this.state.pages[0].completed = await true
            this.setState({
                enemy: enemy,
                story: { title: this.state.story.title, difficulty: this.state.story.difficulty, theme: themeResult, enemy: this.state.story.enemy, enemy_gender: this.state.story.enemy_gender, enemy_prefix: this.state.story.enemy_prefix},
            })
            await this.props.history.push({
                pathname: `/users/${this.props.match.params.user_id}/characters/${this.props.match.params.character_id}/stories/${this.props.match.params.id}/pages/${this.state.firstPage.id}`,
                state: { newState: this.state }
            })
        } else if (this.state.firstPage.number > 1 ){
            await this.props.history.push({
                pathname: `/users/${this.props.match.params.user_id}/characters/${this.props.match.params.character_id}/stories/${this.props.match.params.id}/pages/${this.state.firstPage.id}`,
                state: { newState: this.state }
            })
        }
    }

    handleStoryEnemyUpdate = async (enemy) => {
        const name = await enemy.name
        const gender = await enemy.gender
        const prefix = await enemy.prefix
        const newStory = await { ...this.state.story }
        newStory.enemy = name
        newStory.enemy_gender = gender
        newStory.enemy_prefix = prefix
        this.setState({
            story: newStory
        })
    }

    handleDifficultyUpdate = async () => {
        const newDifficulty = { ...this.state.story }
        await axios.patch(`/api/users/${this.props.match.params.user_id}/characters/${this.props.match.params.character_id}/stories/${this.props.match.params.id}}`, newDifficulty)
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
        const newStateIndex = selectedIndex
        this.handleSetDifficulty(newStateIndex)
    }

    handleSetDifficulty = (index) => {
        switch (index) {
            case 0:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "beginner", enemy: this.state.story.enemy, enemy_gender: this.state.story.enemy_gender, enemy_prefix: this.state.story.enemy_prefix }
                })
                break;
            case 1:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "intermediate", enemy: this.state.story.enemy, enemy_gender: this.state.story.enemy_gender, enemy_prefix: this.state.story.enemy_prefix }
                })
                break;
            case 2:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "advanced", enemy: this.state.story.enemy, enemy_gender: this.state.story.enemy_gender, enemy_prefix: this.state.story.enemy_prefix }
                })
                break;
        }
    }

    handleDifficultyShow = () => {
        if(this.state.firstPage.number === 1) {
            return "show"
        } {
            return "dont_show"
        }
    }


    render() {

        const selectedCharacterHeadDisplay = (character) => {
            if (character.head_element === 1) {
                return (<PrincessHead />)
            } else if (character.head_element === 2) {
                return (<WizardHead />)
            } else if (character.head_element === 3) { return (<DinoHead />) }
        }

        const selectedCharacterBodyDisplay = (character) => {
            if (character.body_element === 1) {
                return (<PrincessBody />)
            } else if (character.body_element === 2) {
                return (<WizardBody />)
            } else if (character.body_element === 3) { return (<DinoBody />) }
        }

        const selectedCharacterLegDisplay = (character) => {
            if (character.leg_element === 1) {
                return (<PrincessLegs />)
            } else if (character.leg_element === 2) {
                return (<WizardLegs />)
            } else if (character.leg_element) { return (<DinoLegs />) }
        }

        const characterDisplay = (character) => {
            if (character.occupation === "Princess") {
                return (
                    <div className="inline" key={character.id}>{character.occupation} {character.name}</div>
                )
            }
            else if (character.occupation === "Wizard" || character.occupation === "Dinosaur") {
                return (
                    <div className="inline" key={character.id}>{character.name} the {character.occupation}</div>
                )
            }
        }

        const startOrContinue = () => {
            if (this.state.firstPage.number > 1) {
                return 'Continue Story'
            } else { return 'Start Story' }
        }

        const { index, direction } = this.state

        return (
            <StoryWrapper>
                <Link to={`/users/${this.props.match.params.user_id}/characters/${this.props.match.params.character_id}/stories`}> Return to stories <h4>></h4></Link>
                <h2>{this.state.story.title}:</h2>
                <h5>with {characterDisplay(this.state.characterInUse)}</h5>
                <Stage width={window.innerWidth} offsetX={50} height={300}>
                        <Layer>
                            {selectedCharacterBodyDisplay(this.state.characterInUse)}
                            {selectedCharacterHeadDisplay(this.state.characterInUse)}
                            {selectedCharacterLegDisplay(this.state.characterInUse)}
                        </Layer>
                    </Stage>
                <div className={this.handleDifficultyShow()}>
                    <div className="difficulty" >Select the Story Difficulty</div>
                    <CarouselWrapper>
                        <Carousel htmlFor="head_element"
                            activeIndex={index}
                            direction={direction}
                            onSelect={this.handleSelect}>
                            <Carousel.Item >
                                <div>Beginner</div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div>Intermediate</div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div>Advanced</div>
                            </Carousel.Item>
                        </Carousel>
                    </CarouselWrapper>
                </div>
                <button onClick={this.handleStoryStart}>{startOrContinue()}</button>
            </StoryWrapper>
        )
    }
}