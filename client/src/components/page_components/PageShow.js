import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class PageShow extends Component {

    state = {
        character: {},
        enemy: {},
        friend: {},
        page: {},
        nextPage: {}
    }

    componentDidMount() {
        this.fetchPageInfo()
    }

    fetchPageInfo = async () => {
        try{
           const pageInfo = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}/pages/${this.props.match.params.id}`) 
           const useCharacter = await this.props.location.state.newState.characterInUse
           const useEnemy = await this.props.location.state.newState.enemy
           const useFriend = await this.props.location.state.newState.friend
           this.setState({
            character: useCharacter,
            enemy: useEnemy,
            page: pageInfo.data,
            friend: useFriend
        })
        } catch (err) {
            console.error(err)
        }
    }

    handleCompletionChange = async (event) => {
        const newPage = {...this.state.page}
        newPage.completed = !newPage.completed
        this.setState({page: newPage})
        await axios.patch(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${this.props.match.params.id}`, newPage)
    }

    handlePageProgression = () => {
        console.log('woot')
    }

  render() {
    const characterDisplay = (character) => {if (character.occupation === "Princess") {
        return(
          <div key={character.id} onClick={()=> this.handleCharacterSelect(character)}>{character.occupation} {character.name}</div>
        )
      }
      else if (character.occupation === "Wizard" || character.occupation === "Dinosaur"){
        return(
          <div key={character.id} onClick={()=> this.handleCharacterSelect(character)}>{character.name} the {character.occupation}</div>
        ) 
      }
    }

    const trueFalseMarker = () => {
        if(this.state.page.completed === true){
            return (<button onClick={this.handlePageProgression}>'true, go to next page'</button>)
        } else { return 'false'}
    }


    console.log(this.props.location.state.newState)
    console.log(this.state.page)
    return (
      <div>
        <h5>completed placeholder: {trueFalseMarker()}</h5>
        look, a page {this.state.page.number}
        <h6>{characterDisplay(this.state.character)}</h6>
        <h6>{this.state.enemy.name}</h6>
        <h6>{this.state.friend.name}</h6>
        <button onClick={this.handleCompletionChange}>change complete placeholder</button>
        <Link to={`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}`}>back to story</Link>
      </div>
    )
  }
}
