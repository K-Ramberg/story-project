import React, { Component } from 'react'
import axios from 'axios'

export default class StoryShow extends Component {

    state = {
        story: {}
    }

    componentDidMount() {
        this.fetchStory()
    }

    fetchStory = async () => {
        try{
            let storyResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}`)
            this.setState({
                story: storyResponse.data
            })
        } catch(err){
            console.error(err)
        }
    }

  render() {
    return (
      <div>
        <h1>{this.state.story.title}</h1>
        <h3>theme select {this.state.story.theme}</h3>
        <h3>difficulty select {this.state.story.difficulty}</h3>
      </div>
    )
  }
}
