import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class UserItems extends Component {
    render() {
        const {login,avatar_url}=this.props.users
        return (
            <div className="card text-center">
               <img src={avatar_url} alt='img' style={{width:'60px'}} className="round-img"/>
               <h3>{login}</h3>
               <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`}>More</Link>
            </div>
        )
    }
}



export default UserItems
