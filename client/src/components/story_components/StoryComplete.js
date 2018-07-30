import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class StoryComplete extends Component {

  state = {
    user: {},
    story: {}
  }

  componentDidMount() {
    this.fetchEndInfo()
  }

  fetchEndInfo = async () => {
    try {
      const userResponse = await axios.get(`/api/users/${this.props.match.params.user_id}`)
      const storyResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.location.state.story}`)
      this.setState({
        user: userResponse.data,
        story: storyResponse.data
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleEndOfStory = async () => {
    
  }

  render() {
    return (
      <div>
        <h1>WELL DONE</h1>
        <Link to={`/users/${this.props.match.params.user_id}/stories`}>back to stories</Link>
      </div>
    )
  }
}