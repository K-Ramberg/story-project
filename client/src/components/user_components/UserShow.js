import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import PrincessHead from '../konva_shapes/character_shapes/PrincessHead';
import WizardHead from '../konva_shapes/character_shapes/WizardHead'
import DinoHead from '../konva_shapes/character_shapes/DinoHead'
import { Stage, Layer } from "react-konva";

const Welcome = styled.div`
    margin: 5vw;
    margin-top: 2vh;
    color: rgb(30,30,30);
`

const CharIndex = styled.div`
  div{
    margin-top: 1vh;
    a{
      h4{ display:none;} 
      font-size: 2rem;
    }
    a:hover{
      text-decoration: none;
      h4{
        display: inline;
        font-size: 1.5rem;
        }
    }
  }
  .character {
    font-size: 3rem;
    margin-top: none;
    a {
      color: rgb(240,130,130);
      }
    a:hover{
      h4 {
        font-size: 1.5rem;
      }
    }  
  }
  .storyNav { 
        h4{ display:none;} 
        font-size: 2.5rem;
        background-color: rgb(218, 247, 166);
        padding: 1vh;
        box-shadow: 2px 2px 4px 2px rgb(3,3,3);
        
      }
      a:hover{
        text-decoration: none;
        h4{
          display: inline;
          font-size: 2rem;
          }
      }
`

export default class UserShow extends Component {

  state= {
    user: {}
}

componentDidMount() {
    this.fetchCharacter()
}  

fetchCharacter = async () => {
    const userId =  this.props.match.params.id
    try{
        let userResponse = await axios.get(`/api/users/${userId}`)
        this.setState({
            user: userResponse.data,
        })
    } catch (err){
        console.error(err)
    }
}

  render() {  
    return (
      <Welcome>
        <CharIndex>
          <h3>{this.state.user.name} User</h3>  
          <div><Link className="storyNav" to={`/users/${this.state.user.id}/characters`}>Go to Characters <h4>></h4></Link></div> 
          <div><Link className="storyNav" to={`/users/${this.state.user.id}/stories`}>Go to Stories <h4>></h4></Link></div>       
        </CharIndex>
      </Welcome>
    )
  }
}
