import React, { Component } from 'react'

class UserItems extends Component {
    render() {
        const {login,avatar_url,html_url}=this.props.users
        return (
            <div className="card text-center">
               <img src={avatar_url} alt='img' style={{width:'60px'}} className="round-img"/>
               <h3>{login}</h3>
               <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
    }
}

export default UserItems
