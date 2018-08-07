import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import HomeStage from './konva_shapes/home_page/HomeStage';

const Welcome = styled.div`
    margin: 5vw;
    color: rgb(30,30,30);
    a {
        font-size: 3vh;
        h4 {
            display: none;
        }
    }
    a:hover {
        text-decoration: none;
        h4{ display: inline;}
    }

`

export default class HomePage extends Component {

    state= {
        users: []
    }

    componentDidMount() {
        this.fetchUsers()
    }  
    
    fetchUsers = async () => {
        try{
            let userResponse = await axios.get('/api/users')
            this.setState({
                users: userResponse.data
            })
        } catch (err){
            console.error(err)
        }
    }

  render() {

    const userMap = this.state.users.map((user) => {
        return(
            <Link key={user.id} to={`/users/${user.id}`}>{user.name} <h4>></h4></Link>
        )
    })

    return (
      <Welcome>
        <h5>Welcome to Mathland. Make a Character to complete stories with the power of Math!</h5>
        {userMap}
        <HomeStage/>
      </Welcome>
    )
  }
}