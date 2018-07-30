import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import MathJax from 'react-mathjax-preview'

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
        // if (newPage.completed === false) {
            newPage.completed = !newPage.completed
            this.setState({ page: newPage })
            await axios.patch(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${this.props.match.params.id}`, newPage)
            if (this.state.page.number < this.state.pages.length) {
                const redirect = await this.handleRedirect()
            } else {
                //const reset = await this.handleStoryReset()
               // const pageArrayReorder = await this.handlePageArrayFix(this.state.page)
                const redirect = await this.props.history.push({pathname:`/users/${this.props.match.params.user_id}/stories/finished`, state:{ story:this.props.match.params.story_id}})
            }
        // }
    }

    handleEndStory = () => {
        this.props.history.push(`/users/${this.props.match.params.user_id}/stories/oops`)
    }
 
    // handleStoryReset =  () => {
    //     this.state.pages.map(async (page) => {
    //         const newPage = {...page}
    //         newPage.completed = false
    //         await axios.patch(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${page.id}`, newPage)
    //     })
    // }

    // handlePageArrayFix = async (page) => {
    //     const newPage = { ...page }
    //     newPage.completed = await !newPage.completed
    //     await axios.patch(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${page.id}`, newPage)
    // }

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

        const trueFalseMarker = () => {
            if (this.state.page.completed === true) {
                return ('true')
            } else { return 'false' }
        }

        const answerMap = this.state.mathLy.choices.map((choice, i) => {
            return (
                <div key={i} onClick={()=>this.handleQuestionAnswer(i)}>{i}. <MathJax math={choice} /></div>
            )
        })

        const questionDisplay = () => {
            return (<div>
                <h5>{this.state.mathLy.category}</h5>
                <MathJax math={this.state.mathLy.question}/>
                <h5>{answerMap}</h5>
            </div>
            )
        }

        console.log(this.state.pages)

        return (
            <div>
                <h5>completed placeholder: {trueFalseMarker()}</h5>
                look, a page {this.state.page.number}
                <h6>{characterDisplay(this.state.characterInUse)}</h6>
                <h6>{this.state.enemy.name}</h6>
                <h6>{this.state.friend.name}</h6>
                <button onClick={this.handleCompletionChange}>change complete placeholder</button>
                <Link to={`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}`}>back to story</Link>
                <h4>___________Question placeholder________________</h4>
                {questionDisplay()}
                <div>the anser is {this.state.mathLy.correct_choice}</div>
            </div>
        )
    }
}