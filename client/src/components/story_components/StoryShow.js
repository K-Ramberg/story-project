import React, { Component } from 'react'
import axios from 'axios'
import { EnemyGenerate, FriendGenerate } from './SubCharacterGenerate';

export default class StoryShow extends Component {

    state = {
        story: {},
        enemy: {},
        friend: {
            name: ''
        }
    }

    componentDidMount() {
        this.fetchStory()
    }

    fetchStory = async () => {
        try{
            let storyResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}`)
            this.setState({
                story: storyResponse.data
            })
        } catch(err){
            console.error(err)
        }
    }
    handleFriendAdd = (event) => {
        event.preventDefault()
        if(this.state.friend.name === ''){
        const friendName = FriendGenerate()
        this.setState({
            friend: {
                name: friendName
            }
        })}
    }

    handleStoryStart = (event) => {
        event.preventDefault()
        const enemyName = EnemyGenerate()
        this.setState({
            enemy : { name: enemyName }
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.story.title}</h1>
        <h3>theme select {this.state.story.theme}</h3>
        <h3>difficulty select {this.state.story.difficulty}</h3>
        <h6>this is the friend placeholder</h6>
            <div>{this.state.friend.name}</div>
        <h6>this is the end of friend placeholder</h6>
        <button onClick={this.handleFriendAdd}>add friend</button>
        <h6> this is the enemy placeholder</h6>
            <div>{this.state.enemy.name}</div>
            <h6>end of placeholder</h6>
        <button onClick={this.handleStoryStart}>start</button>
      </div>
    )
  }
}
