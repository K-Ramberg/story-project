import React, { Component } from 'react'
import axios from 'axios'

export default class StoryOverFail extends Component {

  handleEndOfStoryFail = async () => {
    await axios.delete(`/api/users/${this.props.match.params.user_id}/stories/${this.props.location.state.story}`)
    await this.props.history.push(`/users/${this.props.match.params.user_id}/stories`)
  }

  render() {
    return (
      <div>
        <h1>Sorry Out of Chances</h1>
        <button onClick={this.handleEndOfStoryFail}>back to stories</button>
      </div>
    )
  }
}
