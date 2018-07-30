import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ThemeGenerate } from './SubCharacterGenerate';

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
        await this.loopPageAdd()
    } 

    loopPageAdd = () => {
        for (let i=1; i<=4; i++){
            this.handleGivePages(this.state.stories[this.state.stories.length-1].id, i)
        }
    }

    handleGivePages = async (storyId, pageNumber) => {
        const newPage = {
            number: pageNumber,
            completed: false
        }
        await axios.post(`/api/users/${this.props.match.params.user_id}/stories/${storyId}/pages`, newPage)
    }

  render() {
      const storyMap = this.state.stories.map((story) => {
          return(
            <div key={story.id}><Link to={`/users/${this.props.match.params.user_id}/stories/${story.id}`}>{story.title}</Link></div>
          )
      })
    return (
      <div>
        {storyMap}
        <div>{this.state.user.name} has finished {this.state.user.stories_completed} stories</div>
        <button onClick={this.buildNewStory}>add new story</button>
      </div>
    )
  }
}
