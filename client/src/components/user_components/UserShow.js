import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'

export default class UserShow extends Component {

  state= {
    user: {},
    characters: []
}

componentDidMount() {
    this.fetchCharacter()
}  

fetchCharacter = async () => {
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
      let userId = this.state.user.id
      if (char.occupation === "Princess") {
        return(
          <div><Link key={char.id} to={`/users/${userId}/characters/${char.id}`}>{char.occupation} {char.name}</Link></div>
        )
      }
      else if (char.occupation === "Wizard" || char.occupation === "Dinosaur"){
        return(
          <div><Link key={char.id} to={`/users/${userId}/characters/${char.id}`}>{char.name} the {char.occupation}</Link></div>
        ) 
      }
    })


    return (
      <div>
        this here be a user
        {characterMap}
      </div>
    )
  }
}
