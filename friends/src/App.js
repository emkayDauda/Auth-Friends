import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';
import axios from "axios";
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';


const login = (formValues, actions) => {
  axios.post("http://localhost:5000/api/login", {
    username: formValues.username,
    password: formValues.password,
  })
  .then(res => {
    console.log(res.data);
    localStorage.setItem('token', res.data.payload)
  })
  .catch(error => {
    console.log(error);
  })

  actions.resetForm()
}

function App(props) {
  console.log(props);
  return (
    <div className="App">
     <nav>
       <NavLink exact to='/'>Login</NavLink>
       <NavLink  to='/friends'>Friends</NavLink>
       {/* <NavLink  to='/new-friend'>Friends</NavLink> */}
     </nav>

     <Route exact path = '/' render={ props => {
       
       return (<Login onSubmit ={login}/>)
     }}/>
     
     <Route path = '/friends' render={ props => {
       
       return (<FriendsList onSubmit ={login}/>)
     }}/>

<Route path = '/new-friend' render={ props => {
       
       return (<NewFriend onSubmit ={login}/>)
     }}/>
    </div>
  );
}

export default withRouter(App);
