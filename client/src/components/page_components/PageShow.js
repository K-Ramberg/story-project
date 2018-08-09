import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import MathJax from 'react-mathjax-preview'
import styled from 'styled-components'

const PageWrapper = styled.div`
    margin: 5vw;
    color: rgb(30,30,30);
    h2 {
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
        font-size: 2rem;
        }
    }
    button {
        margin: 1vh auto;
    }
    .completed {
        display: none;
    }
   ` 

   const CompletedWrapper = styled.div`
    margin: 5vw;
    color: rgb(30,30,30);
    h2 {
        color: rgb(240,130,130);
        margin-bottom: 2vh;
    }
    .incomplete {
        display: none;
    }
   `

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

    handleCompletedDisplay = () => {
        if(this.state.page.completed === true){
            return "completed"
        } else {  return "incomplete" }
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
                <PageWrapper>
                    <div className={this.handleCompletedDisplay()}>
                        <h2>Page {this.state.page.number}</h2>
                        <h6>{characterDisplay(this.state.characterInUse)}</h6>
                        {selectedCharacterHeadDisplay(this.state.characterInUse)}
                        {selectedCharacterBodyDisplay(this.state.characterInUse)}
                        {selectedCharacterLegDisplay(this.state.characterInUse)}
                        <h6>{this.state.enemy.name}</h6>
                        <h4>________________________</h4>
                        {questionDisplay()}
                    </div>
                    <Link to={`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}`}>Turn Back<h4>!</h4></Link>
                    <div className={this.handleCompletedDisplay()}>Demo que(the answer is {this.state.mathLy.correct_choice + 1})</div>
                </PageWrapper>
                <CompletedWrapper>
                    <h2 className={this.handleCompletedDisplay()}>Page  {this.state.page.number} has already been completed! Please turn back to the story page to continue the story.</h2>
                </CompletedWrapper>
             </div>   
        )
    }
}