import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StoryComplete extends Component {
  render() {
    return (
      <div>
        <h1>WELL DONE</h1>
        <Link to={`/users/${this.props.match.params.user_id}/stories`}>back to stories</Link>
      </div>
    )
  }
}
