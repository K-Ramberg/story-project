import React, { Component } from 'react'
import axios from 'axios'
import { EnemyGenerate, FriendGenerate, ThemeGenerate } from './SubCharacterGenerate';
import { Link } from 'react-router-dom'

export default class StoryShow extends Component {

    state = {
        story: {},
        pages: [],
        enemy: {},
        friend: {
            name: ''
        }
    }

    componentDidMount() {
        this.fetchStoryAndPages()
    }

    fetchStoryAndPages = async () => {
        try{
            let storyResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}`)
            let pagesResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}/pages`)
            this.setState({
                story: storyResponse.data,
                pages: pagesResponse.data
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
        const themeResult = ThemeGenerate()
        this.setState({
            enemy: { name: enemyName },
            story: { title: this.state.story.title, difficulty: this.state.story.difficulty, theme: themeResult}
        })
    }

    handleIncreaseDifficulty = (event) => {
         switch(this.state.story.difficulty){
             case 1:
             this.setState({
                 story: {title: this.state.story.title, theme: this.state.story.theme, difficulty: 2}
             })
             break;
             case 2:
             this.setState({
                 story: {title: this.state.story.title, theme: this.state.story.theme, difficulty: 3}
             })
             break;
             case 3:
             this.setState({
                 story: {title: this.state.story.title, theme: this.state.story.theme, difficulty: 4}
             })
             break; 
             case 4:
             break;
         }
    }

    handleDecreaseDifficulty = (event) => {
         switch(this.state.story.difficulty){
             case 4:
             this.setState({
                 story: {title: this.state.story.title, theme: this.state.story.theme, difficulty: 3}
             })
             break;
             case 3:
             this.setState({
                 story: {title: this.state.story.title, theme: this.state.story.theme, difficulty: 2}
             })
             break;
             case 2:
             this.setState({
                 story: {title: this.state.story.title, theme: this.state.story.theme, difficulty: 1}
             })
             break; 
             case 1:
             break;
         }
    }

  render() {

    const pageMap = this.state.pages.map((page) => {
           return (
           <div key={page.id}>{page.completed === false? 
                <div>Page {page.number}</div>
           :<div><Link to={`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.story_id}/pages/${this.props.match.params.id}`}>Page {page.number}</Link></div>}</div>
           )
    })

    return (
      <div>
        <h1><Link to={`/users/${this.props.match.params.user_id}/stories`}>{this.state.story.title}</Link></h1>
        <h3>theme placeholder {this.state.story.theme}</h3>
        <h3>difficulty select <button onClick={this.handleDecreaseDifficulty}> "-" </button> 
                    {this.state.story.difficulty} 
                              <button onClick={this.handleIncreaseDifficulty}> "+" </button></h3>
        <h6>this is the friend placeholder</h6>
            <div>{this.state.friend.name}</div>
        <h6>this is the end of friend placeholder</h6>
        <button onClick={this.handleFriendAdd}>add friend</button>
        <h6> this is the enemy placeholder</h6>
            <div>{this.state.enemy.name}</div>
            <h6>end of placeholder</h6>
        <button onClick={this.handleStoryStart}>start</button>
        <div>{pageMap}</div>
      </div>
    )
  }
}
