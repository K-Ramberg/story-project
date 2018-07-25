import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class StoryIndex extends Component {

    state = {
        stories: []
    }

    componentDidMount() {
        this.fetchStories()
    }

    fetchStories = async () => {
        try{
            let storiesResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories`)
            this.setState({
                stories: storiesResponse.data
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
      </div>
    )
  }
}
