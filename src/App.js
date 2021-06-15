import React, { Component,Fragment } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Users from './components/Users';
import Search from './components/layout/Search';
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import User from './components/User';
import './App.css';

export class App extends Component {

  state={
    loading:false,
    users:[],
    alert:null,
    user:{},
    repos:[]
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

   //Get single gitHub user
   getUser = async (username)=>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}&client_id=32e8873788cd42590918&client_secret=cda96905482c6941f8ec602ba3894fcdc4b78d03`)
    console.log(res.data)
    this.setState({user:res.data,loading:false})
  }

  //Get users repos
  getUserRepos = async username =>{
    this.setState({loading:true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=32e8873788cd42590918&client_secret=cda96905482c6941f8ec602ba3894fcdc4b78d03`)
    this.setState({repos:res.data,loading:false})
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
      <Router>
        <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path="/" render={
              props=>(
                <Fragment>
                  <Search getUsers={this.getUsers} users={this.state.users} clearUsers={this.state.clearUsers} setAlert={this.setAlert}/>
                  <Users users={this.state.users} loading={this.state.loading}/>
                </Fragment>
              )
            }/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" render={
              props=>(
                <User {...props} getUser={this.getUser} loading={this.state.loading} getUserRepos={this.getUserRepos} repos={this.state.repos}/>
              )
            }/>
          </Switch>
        </div>
      </div>
      </Router>
    )
  }
}

export default App
