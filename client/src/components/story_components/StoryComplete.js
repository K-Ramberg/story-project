import React, { Component } from 'react'
import axios from 'axios'

export default class StoryComplete extends Component {

  state = {
    user: {}
  }

  componentDidMount() {
    this.fetchEndInfo()
  }

  fetchEndInfo = async () => {
    try {
      const userResponse = await axios.get(`/api/users/${this.props.match.params.user_id}`)
      this.setState({
        user: userResponse.data
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleEndOfStory = async () => {
    const updateUser = {...this.state.user}
    updateUser.stories_completed = updateUser.stories_completed + 1
    await axios.patch(`/api/users/${this.state.user.id}`, updateUser)
    await axios.delete(`/api/users/${this.props.match.params.user_id}/stories/${this.props.location.state.story}`)
    await this.props.history.push(`/users/${this.props.match.params.user_id}/stories`)
  }

  render() {
    return (
      <div>
        <h1>WELL DONE</h1>
        <button onClick={this.handleEndOfStory}>back to stories</button>
      </div>
    )
  }
}