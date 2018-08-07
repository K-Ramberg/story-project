import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const CharIndex = styled.div`
  div{
    a{
      h4{ display:none;} 
    }
    a:hover{
      text-decoration: none;
      h4{
        display: inline;
        font-size: 1rem;
        }
    }
  }
  .character {
    font-size: 3rem;
    a {
      color: rgb(240,130,130);
      }
    a:hover{
      h4 {
        font-size: 3rem;
      }
    }  
  }
  margin-bottom: 4vh;
`

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
          <div className="character" key={char.id}><Link to={`/users/${userId}/characters/${char.id}`}>{char.occupation} {char.name} <h4>></h4></Link></div>
        )
      }
      else if (char.occupation === "Wizard" || char.occupation === "Dinosaur"){
        return(
          <div className="character" key={char.id}><Link to={`/users/${userId}/characters/${char.id}`}>{char.name} the {char.occupation} <h4>></h4></Link></div>
        ) 
      }
    })
    

    return (
      <CharIndex>
        <h2>{this.state.user.name} Characters</h2>
        {characterMap}
        <div><Link to={`/users/${this.state.user.id}/characters/new`}>add another character <h4>></h4></Link></div>
        <div><Link to={`/users/${this.state.user.id}/stories`}>Go to Stories <h4>></h4></Link></div>
      </CharIndex>
    )
  }
}
