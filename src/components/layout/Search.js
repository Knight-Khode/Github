import React, { Component } from 'react'

class Search extends Component {
    state={
        text:""
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    } 

    onSubmit=(e)=>{
        e.preventDefault()
        if(this.state.text===""){
            this.props.setAlert("Enter username","light")
        }else{
            this.props.getUsers(this.state.text)
        } 
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users.." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" name="text" value="Search" className="btn btn-dark btn-block"/>     
                    {this.props.users.length > 0 && <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>}
            </form>
        )
    }
}

export default Search
