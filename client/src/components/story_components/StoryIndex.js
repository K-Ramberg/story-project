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
        user: {}
    }

    componentDidMount() {
        this.fetchStories()
    }

    fetchStories = async () => {
        try{
            const storiesResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories`)
            const userResponse = await axios.get(`/api/users/${this.props.match.params.user_id}`)
            this.setState({
                stories: storiesResponse.data,
                user: userResponse.data
            })
        } catch(err){
            console.error(err)
        }
    }

    buildNewStory =async () => {
        const createStory = {
            title: "strolling the castle again",
            theme: 1,
            difficulty: "beginner"
        }
        const randomizer = ThemeGenerate()
         if(randomizer === 1){
        createStory.title = "another walk through the forest"
         }
        await axios.post(`/api/users/${this.props.match.params.user_id}/stories`, createStory)
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
        await axios.post(`/api/users/${this.props.match.params.user_id}/stories/${storyId}/pages`, newPage)
    }

    handleGoBack = (event) =>{
        event.preventDefault()
        this.props.history.push(`/users/${this.props.match.params.user_id}`)
    }

  render() {
      const storyMap = this.state.stories.map((story) => {
          return(
            <div key={story.id}><Link to={`/users/${this.props.match.params.user_id}/stories/${story.id}`}>{story.title} <h4>></h4></Link></div>
          )
      })

      const storyPlace = () => {
          if(this.state.user.stories_completed === 1 ){
              return "Story"
          }{
              return "Stories"
          }
      }

      console.log(this.state.stories)

    return (
      <StorySort>
        <button onClick={this.buildNewStory}>Add new story</button>
        {storyMap}
        <CompletionMeter>{this.state.user.name} has finished {this.state.user.stories_completed} {storyPlace()}</CompletionMeter>
        <button onClick={this.handleGoBack}>Back to Characters</button>
      </StorySort>
    )
  }
}
