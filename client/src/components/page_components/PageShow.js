import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import MathJax from 'react-mathjax-preview'
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
import { Modal, Button } from 'react-bootstrap'

const PageWrapper = styled.div`
    margin: 5vw;
    color: rgb(30,30,30);
    h2 {
        color: rgb(240,130,130);
        margin-bottom: 2vh;
        font-size: 2rem;
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
    .modal-dialog {
        width: 94vw;
        height: 90vh;
    }
    .modal-content {
        height: 95vh;
    }
    .modal-body {
        height: 75vh;
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
        answerChances: [],
        modalDisplay: false
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
                answerChances: [],
                modalDisplay: false
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
                const redirect = await this.props.history.push({ pathname: `/users/${this.props.match.params.user_id}/stories/finished`, state: { story: this.props.match.params.story_id } })
            }
        }
    }

    handleEndStory = async () => {
        await axios.delete(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}`)
        await this.props.history.push(`/users/${this.props.match.params.user_id}/stories/oops`)
    }

    handleQuestionAnswer = (index) => {
        if (index === this.state.mathLy.correct_choice) {
            this.handleCompletionChange()
        }
        {
            if (this.state.answerChances.length < 2) {
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
        if (this.state.page.completed === true) {
            return "completed"
        } else { return "incomplete" }
    }

    handleModalDisplay = () => {
        if (this.state.modalDisplay === true) {
            return "invisible"
        } else { return "visible" }
    }

    changeModalDisplay = () => {
        this.setState({
            modalDisplay: true
        })
    }

    render() {

        const modalIntro = (pageNumber) => {
            switch(pageNumber){
                case 1:
                    return ("Welcome to page 1")
                break;
                default:
                    return ("Keep Going")
                break;
                case this.state.pages.length:
                    return ("Welcome to the last page")
                break;
            }
        }

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
                <div key={i} onClick={() => this.handleQuestionAnswer(i)}>{i + 1}. <MathJax math={choice} /></div>
            )
        })

        const questionDisplay = () => {
            return (<div>
                What is ...<MathJax math={this.state.mathLy.question} />
                <h5>{answerMap}</h5>
            </div>
            )
        }

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

        return (
            <div>
                <PageWrapper>
                    <div className={this.handleCompletedDisplay()}>
                        <div className={`static-modal ${this.handleModalDisplay()}`}>
                            <Modal.Dialog>
                                <Modal.Header>
                                    <Modal.Title>{this.state.page.number}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>{modalIntro(this.state.page.number)} {this.state.enemy.name}</Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={this.changeModalDisplay}>Close</Button>
                                </Modal.Footer>
                            </Modal.Dialog>
                        </div>
                        <h2>Page {this.state.page.number}</h2>
                        <h6>{characterDisplay(this.state.characterInUse)}</h6>
                        <h6>{this.state.enemy.name}</h6>
                        <h4>________________________</h4>
                        {questionDisplay()}
                        <div>Demo que(the answer is {this.state.mathLy.correct_choice + 1})</div>
                        <Stage width={window.innerWidth} height={290}>
                            <Layer>
                                {selectedCharacterBodyDisplay(this.state.characterInUse)}
                                {selectedCharacterHeadDisplay(this.state.characterInUse)}
                                {selectedCharacterLegDisplay(this.state.characterInUse)}
                            </Layer>
                        </Stage>
                    </div>
                    <Link to={`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}`}>Turn Back<h4>!</h4></Link>
                </PageWrapper>
                <CompletedWrapper>
                    <h2 className={this.handleCompletedDisplay()}>Page  {this.state.page.number} has already been completed! Please turn back to the story page to continue the story.</h2>
                </CompletedWrapper>
            </div>
        )
    }
}