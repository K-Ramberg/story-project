import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Carousel } from 'react-bootstrap'

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
            <Link key={user.id} to={`/users/${user.id}`}>{user.name}</Link>
        )
    })

    return (
      <div>
        <h5>Welcome to Mathland. Make a Character to complete stories with the power of Math!</h5>
        {userMap}
      </div>
    )
  }
}
