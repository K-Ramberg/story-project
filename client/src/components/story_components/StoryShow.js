import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import { EnemyGenerate, FriendGenerate, ThemeGenerate } from './SubCharacterGenerate';
import { Link } from 'react-router-dom'

export default class StoryShow extends Component {

    state = {
        characters: [],
        characterInUse: '',
        story: {},
        pages: [],
        firstPage: {},
        enemy: {},
        friend: {
            name: ''
        }
    }

    componentDidMount() {
        this.fetchStoryAndPages()
    }

    fetchStoryAndPages = async () => {
        try {
            const storyResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}`)
            const pagesResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}/pages`)
            const charactersResponse = await axios.get(`/api/users/${this.props.match.params.user_id}/characters`)
            const enemyName = await EnemyGenerate()
            this.setState({
                characters: charactersResponse.data,
                story: storyResponse.data,
                pages: pagesResponse.data,
                enemy: {name:enemyName}
            })
            const setFirstPage = await this.setFirstPage()
        } catch (err) {
            console.error(err)
        }
    }

    setFirstPage = () => {
        const firstPage = {...this.state.pages[0]}
        this.setState({ firstPage })
    }

    handleFriendAdd = (event) => {
        event.preventDefault()
        if (this.state.friend.name === '') {
            const friendName = FriendGenerate()
            this.setState({
                friend: {
                    name: friendName
                }
            })
        }
    }

    handleStoryStart = () => {
        if (this.state.characterInUse !== ''){
        this.props.history.push({ pathname:`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}/pages/${this.state.pages[0].id}`,
        state: { newState: this.state }
        }) 
       }
    }

    handleIncreaseDifficulty = (event) => {
        switch (this.state.story.difficulty) {
            case 1:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: 2 }
                })
                break;
            case 2:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: 3 }
                })
                break;
            case 3:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: 4 }
                })
                break;
            case 4:
                break;
        }
    }

    handleDecreaseDifficulty = (event) => {
        switch (this.state.story.difficulty) {
            case 4:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: 3 }
                })
                break;
            case 3:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: 2 }
                })
                break;
            case 2:
                this.setState({
                    story: { title: this.state.story.title, theme: this.state.story.theme, difficulty: 1 }
                })
                break;
            case 1:
                break;
        }
    }

    handleCharacterSelect = (character) => {
        let useCharacter = {...this.state.characterInUse}
        useCharacter = character
        const themeResult = ThemeGenerate()
        this.setState({
            characterInUse: useCharacter,
            story: { title: this.state.story.title, difficulty: this.state.story.difficulty, theme: themeResult }
        })
    }

    render() {
        
        const sortByPageNumber = _.sortBy(this.state.pages,['page','number'])
        

        const pageMap = sortByPageNumber.map((page) => {
            return (
                <div key={page.id}>{page.completed === false ?
                    <div>Page {page.number}</div>
                    : <div>
                        <Link to={{ pathname:`/users/${this.props.match.params.user_id}/stories/${this.props.match.params.id}/pages/${page.id}`,
                                    state: { newState: this.state }
                                }}>
                                Page {page.number}
                            </Link>
                      </div>}
                </div>
            )
        })


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

        const characterMap = this.state.characters.map((character) => {
                    return(
                        <div key={character.id}>{characterDisplay(character)}</div>
                    )
        })

        const startOrContinue = () => {
            if(this.state.firstPage.number > 1){
                return 'Continue'
            } else { return 'Start'}
        }

        return (
            <div>
                <h1><Link to={`/users/${this.props.match.params.user_id}/stories`}>{this.state.story.title}</Link></h1>
                <h3>theme placeholder {this.state.story.theme}</h3>
                <h3>difficulty select <button onClick={this.handleDecreaseDifficulty}> "-" </button>
                    {this.state.story.difficulty}
                    <button onClick={this.handleIncreaseDifficulty}> "+" </button></h3>
                <h3>user characters------</h3>
                    {characterMap}
                <h3>----------------------</h3>
                <h2>selected Character</h2>
                    {this.state.characterInUse.name}
                <h2>___________________</h2>
                <h6>this is the friend placeholder</h6>
                <div>{this.state.friend.name}</div>
                <h6>this is the end of friend placeholder</h6>
                <button onClick={this.handleFriendAdd}>add friend</button>
                <h6> this is the enemy placeholder</h6>
                <div>{this.state.enemy.name}</div>
                <h6>end of placeholder</h6>
                <button onClick={this.handleStoryStart}>{startOrContinue()}</button>
                <div>{pageMap}</div>
            </div>
        )
    }
}