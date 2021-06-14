import React, { Component } from 'react'
import UserItems from './UserItems'
import Spinner from './layout/Spinner'


class Users extends Component {
    render() {
        const {loading,users} = this.props

        if(loading){
            return(
                <Spinner/>
            )
        }else{
            return (
                <div style={userStyle}>
                    {users.map(user=><UserItems key={user.id} users={user}/>)}
                </div>
            )
        }
    }
}

const userStyle={
    display:'grid',
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem"
}

export default Users
