import React, { Component } from 'react'

export default class PageShow extends Component {
  render() {
      console.log(this.props.location.state)
    return (
      <div>
        look, a page
      </div>
    )
  }
}
