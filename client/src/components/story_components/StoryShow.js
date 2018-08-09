import React, { Component } from 'react'
import _ from 'lodash'
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
    h1 {
        color: rgb(240,130,130);
        margin-bottom: 2vh;
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
        margin-top: 3vh;
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
`

const CarouselWrapper1 = styled.div`
    .carousel-inner {
        height: 50px;
        text-align:center;
        div {
            margin-top: 3vh;
            font-size: 2rem;
        }
        margin-bottom: 2vh;
    }
    .carousel-control{
        max-height: 50px;
    }
    .carousel-indicators{
        display: none;
    }
`

const CarouselWrapper2 = styled.div`
    .carousel-inner {
        height: 350px;
        text-align:center;
        div {
            margin-top: 3vh;
            font-size: 2rem;
        }
        margin-bottom: 2vh;
    }
    .carousel-control{
        max-height: 350px;
    }
    .carousel-indicators{
        display: none;
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
        },
        index: 0,
        direction: null,
        index2: 0,
        direction2: null
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
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "beginner" }
                })
                break;
            case 1:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "intermediate" }
                })
                break;
            case 2:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: "advanced" }
                })
                break;
        }
    }

    handleSelect2 = (selectedIndex, e) => {
        this.setState({
            index2: selectedIndex,
            direction2: e.direction
        });
        const newStateIndex = selectedIndex
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

        const characterMap = this.state.characters.map((character, i) => {
                    return(
                        <Carousel.Item key={i}>
                        <div>{characterDisplay(character)}</div>
                        <Stage width={window.innerWidth} height={window.innerHeight}>
                            <Layer>
                                {selectedCharacterBodyDisplay(character)}
                                {selectedCharacterHeadDisplay(character)}
                                {selectedCharacterLegDisplay(character)}
                            </Layer>
                        </Stage>
                        </Carousel.Item>
                    )
        })

        const startOrContinue = () => {
            if(this.state.firstPage.number > 1){
                return 'Continue Story'
            } else { return 'Start Story'}
        }

        const { index, index2, direction, direction2 } = this.state

        return (
            <StoryWrapper>
                <h1>{this.state.story.title}</h1>
                <div className="difficulty" >Select the Story Difficulty</div>
                <CarouselWrapper1>
                <Carousel htmlFor="head_element"
                        activeIndex={index}
                        direction={direction}
                        onSelect={this.handleSelect}
                         >
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
                     </CarouselWrapper1>
                <div className="difficulty">Choose a Character</div>
                <CarouselWrapper2>
                <Carousel htmlFor="head_element"
                        activeIndex={index2}
                        direction={direction2}
                        onSelect={this.handleSelect2}
                         >
                         {characterMap}
                        </Carousel> 
                </CarouselWrapper2>        
                <h2>selected Character: {this.state.characterInUse.name}</h2>
                    {selectedCharacterHeadDisplay(this.state.characterInUse)}
                    {selectedCharacterBodyDisplay(this.state.characterInUse)}
                    {selectedCharacterLegDisplay(this.state.characterInUse)}
                <button onClick={this.handleStoryStart}>{startOrContinue()}</button>
                <div>{pageMap}</div>
                <Link to={`/users/${this.props.match.params.user_id}/stories`}> Go back to stories <h4>></h4></Link>
            </StoryWrapper>
        )
    }
}