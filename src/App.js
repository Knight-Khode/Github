import React, { Component } from 'react'
import axios from 'axios'
import Navbar from './components/layout/Navbar';
import Users from './components/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import './App.css';

export class App extends Component {

  state={
    loading:false,
    users:[],
    alert:null
  }
/*
  async componentDidMount(){
    this.setState({loading:true})
    const res = await axios.get("https://api.github.com/users?client_id=32e8873788cd42590918&client_secret=cda96905482c6941f8ec602ba3894fcdc4b78d03")
    this.setState({users:res.data,loading:false})
  }*/

  getUsers=async(text)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=32e8873788cd42590918&client_secret=cda96905482c6941f8ec602ba3894fcdc4b78d03`)
    this.setState({users:res.data.items,loading:false})
  }

  setAlert=(msg,type)=>{
    this.setState({
      alert:{
        msg,
        type
      }
    })
    setTimeout(()=>this.setState({alert:null}),5000)
  }

  clearUsers=()=>{
    this.setState({
      users:[]
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Search getUsers={this.getUsers} users={this.state.users} clearUsers={this.state.clearUsers} setAlert={this.setAlert}/>
          <Users users={this.state.users} loading={this.state.loading}/>
        </div>
      </div>
    )
  }
}

export default App
