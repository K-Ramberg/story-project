import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import MathJax from 'react-mathjax-preview'
import { PrincessHead, PrincessBody, PrincessLegs, WizardHead, WizardBody, WizardLegs, DinoHead, DinoBody, DinoLegs, StyleWrapper} from '../character_components/CharacterStyles' 

export default class PageShow extends Component {

    state = {
        characterInUse: {},
        friend: {},
        page: {},
        pages: [],
        enemy: {},
        mathLy: {
            choices: []
        },
        answerChances: []
    }

    componentDidMount() {
        this.fetchPageInfo()
    }

    fetchPageInfo = async () => {
        try {
            const pageInfo = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${this.props.match.params.id}`)
            const allPages = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages`)
            const useCharacter = await this.props.location.state.newState.characterInUse
            const useEnemy = await this.props.location.state.newState.enemy
            const useFriend = await this.props.location.state.newState.friend
            this.setState({
                characterInUse: useCharacter,
                enemy: useEnemy,
                page: pageInfo.data.page,
                friend: useFriend,
                pages: allPages.data,
                mathLy: pageInfo.data.question,
                answerChances: []
            })
        } catch (err) {
            console.error(err)
        }
    }

    handleCompletionChange = async () => {
        const newPage = { ...this.state.page }
        if (newPage.completed === false) {
            newPage.completed = !newPage.completed
            this.setState({ page: newPage })
            await axios.patch(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${this.props.match.params.id}`, newPage)
            if (this.state.page.number < this.state.pages.length) {
                const redirect = await this.handleRedirect()
            } else {
                const redirect = await this.props.history.push({pathname:`/users/${this.props.match.params.user_id}/stories/finished`, state:{ story:this.props.match.params.story_id}})
            }
        }
    }

    handleEndStory = async() => {
        await axios.delete(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}`)
        await this.props.history.push(`/users/${this.props.match.params.user_id}/stories/oops`)
    }

    handleQuestionAnswer = (index) => {
        if(index === this.state.mathLy.correct_choice){
            this.handleCompletionChange()
        }
        { if(this.state.answerChances.length < 2){
            this.state.answerChances.push('wrong')
        } else {
            this.handleEndStory()
        }
        }
        
    }

    handleRedirect = () => {
        this.props.history.push({
            pathname: `/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${this.state.page.id + 1}`,
            state: { newState: this.state }
        })
        this.fetchPageInfo()
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

        const answerMap = this.state.mathLy.choices.map((choice, i) => {
            return (
                <div key={i} onClick={()=>this.handleQuestionAnswer(i)}>{i+1}. <MathJax math={choice} /></div>
            )
        })

        const questionDisplay = () => {
            return (<div>
                What is ...<MathJax math={this.state.mathLy.question}/>
                <h5>{answerMap}</h5>
            </div>
            )
        }   

        const selectedCharacterHeadDisplay = (character) => {
            if(character.head_element === 1){
                return(<StyleWrapper><PrincessHead/></StyleWrapper>)
            } else if (character.head_element === 2){
                return(<StyleWrapper><WizardHead/></StyleWrapper>)
            } else { return(<StyleWrapper><DinoHead/></StyleWrapper>)}
        }

        const selectedCharacterBodyDisplay = (character) => {
            if(character.body_element === 1){
                return(<StyleWrapper><PrincessBody/></StyleWrapper>)
            } else if (character.head_element === 2){
                return(<StyleWrapper><WizardBody/></StyleWrapper>)
            } else { return(<StyleWrapper><DinoBody/></StyleWrapper>)}
        }

        const selectedCharacterLegDisplay = (character) => {
            if(character.body_element === 1){
                return(<StyleWrapper><PrincessLegs/></StyleWrapper>)
            } else if (character.head_element === 2){
                return(<StyleWrapper><WizardLegs/></StyleWrapper>)
            } else { return(<StyleWrapper><DinoLegs/></StyleWrapper>)}
        }

        return (
            <div>
                <h2>Page {this.state.page.number}</h2>
                <h6>{characterDisplay(this.state.characterInUse)}</h6>
                {selectedCharacterHeadDisplay(this.state.characterInUse)}
                {selectedCharacterBodyDisplay(this.state.characterInUse)}
                {selectedCharacterLegDisplay(this.state.characterInUse)}
                <h6>{this.state.enemy.name}</h6>
                <h4>________________________</h4>
                {questionDisplay()}
                <Link to={`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}`}>Turn Back!</Link>
                <div>Demo que(the answer is {this.state.mathLy.correct_choice + 1})</div>
            </div>
        )
    }
}