import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class StoryComplete extends Component {
  render() {
    const allPages = axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.location.state.story}/pages`)
    console.log(allPages)
    return (
      <div>
        <h1>WELL DONE</h1>
        <Link to={`/users/${this.props.match.params.user_id}/stories`}>back to stories</Link>
      </div>
    )
  }
}