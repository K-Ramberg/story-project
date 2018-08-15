import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ThemeGenerate } from './SubCharacterGenerate';
import styled from 'styled-components'

const StorySort = styled.div`
    button {
        margin: 3vh;
        font-size: 2rem;
    }
    margin: 5vw;
    color: rgb(30,30,30);
     a{
         margin: 3rem;
        h4{ display:none;} 
        font-size: 2rem;
        background-color: rgb(218, 247, 166);
        padding: 0.5vh;
        box-shadow: 2px 2px 4px 2px rgb(3,3,3);
      }
    a:hover{
      text-decoration: none;
      h4{
        display: inline;
        font-size: 1.5rem;
        }
    }
` 
const CompletionMeter = styled.div`
    margin: 3rem;
    font-size: 2.5rem;
`

export default class StoryIndex extends Component {
    state = {
        stories: [],
        character: {}
    }

    componentDidMount() {
        this.fetchStories()
    }

    fetchStories = async () => {
        const userId = this.props.match.params.user_id
        const characterId = this.props.match.params.id
        try{
            const storiesResponse = await axios.get(`/api/users/${userId}/characters/${characterId}/stories`)
            const characterResponse = await axios.get(`/api/users/${userId}/characters/${characterId}`)
            this.setState({
                stories: storiesResponse.data,
                character: characterResponse.data
            })
        } catch(err){
            console.error(err)
        }
    }

    buildNewStory =async () => {
        const createStory = {
            title: "strolling the castle again",
            theme: 1,
            difficulty: "beginner",
            character_id: this.state.character.id
        }
        const randomizer = ThemeGenerate()
         if(randomizer === 1){
        createStory.title = "another walk through the forest"
         }
        await axios.post(`/api/users/${this.props.match.params.user_id}/characters/${this.props.match.params.id}/stories`, createStory)
        await this.fetchStories()
        await this.handleGivePages(this.state.stories[this.state.stories.length-1].id, 1)
        await this.handleGivePages(this.state.stories[this.state.stories.length-1].id, 2)
        await this.handleGivePages(this.state.stories[this.state.stories.length-1].id, 3)
        await this.handleGivePages(this.state.stories[this.state.stories.length-1].id, 4)
    } 

    handleGivePages = async (storyId, pageNumber) => {
        const newPage = {
            number: pageNumber,
            completed: false
        }
        await axios.post(`/api/users/${this.props.match.params.user_id}/characters/${this.props.match.params.id}/stories/${storyId}/pages`, newPage)
    }

    handleGoBack = (event) =>{
        event.preventDefault()
        this.props.history.push(`/users/${this.props.match.params.user_id}/characters/${this.props.match.params.id}`)
    }

  render() {
      const storyMap = this.state.stories.map((story) => {
          return(
            <div key={story.id}><Link to={`/users/${this.props.match.params.user_id}/characters/${this.props.match.params.id}/stories/${story.id}`}>{story.title} <h4>></h4></Link></div>
          )
      })

      const storyPlace = () => {
          if(this.state.character.stories_completed === 1 ){
              return "Story"
          }{
              return "Stories"
          }
      }
      
    return (
      <StorySort>
        <button onClick={this.buildNewStory}>Add new story</button>
        {storyMap}
        <CompletionMeter>{this.state.character.name}  has finished {this.state.character.stories_completed} {storyPlace()}</CompletionMeter>
        <CompletionMeter> for {this.state.character.points} Points</CompletionMeter>
        <button onClick={this.handleGoBack}>Back to {this.state.character.name}</button>
      </StorySort>
    )
  }
}
