import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
      </div>
    )
  }
}
