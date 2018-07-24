import React, { Component } from 'react'
import axios from 'axios'

export default class UserShow extends Component {

  state= {
    user: {},
    characters: []
}

componentDidMount() {
    this.fetchUser()
}  

fetchUser = async () => {
    const userId =  this.props.match.params.id
    try{
        let userResponse = await axios.get(`/api/users/${userId}`)
        let characterResponse = await axios.get(`/api/users/${userId}/characters`)
        this.setState({
            user: userResponse.data,
            characters: characterResponse.data
        })
    } catch (err){
        console.error(err)
    }
}

  render() {
    const characterMap = this.state.characters.map((char) => {
      return(
        <div key={char.id}>{char.name}</div>
      )
    })
    return (
      <div>
        this here be a user
        {characterMap}
      </div>
    )
  }
}
