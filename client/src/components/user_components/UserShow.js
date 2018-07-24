import React, { Component } from 'react'
import axios from 'axios'

export default class UserShow extends Component {

  state= {
    user: {}
}

componentDidMount() {
    this.fetchUser()
}  

fetchUser = async () => {
    const userId =  this.props.match.params.id
    try{
        let userResponse = await axios.get(`/api/users/${userId}`)
        this.setState({
            user: userResponse.data
        })
    } catch (err){
        console.error(err)
    }
}

  render() {
    console.log(this.state)
    return (
      <div>
        this here be a user
      </div>
    )
  }
}
