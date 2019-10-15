import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';


const login = (formValues, actions) => {


  actions.resetForm()
}

function App() {
  return (
    <div className="App">
     <nav>
       <NavLink exact to='/'>Login</NavLink>
       {/* <NavLink  to='/'>Login</NavLink> */}
     </nav>

     <Route exact path = '/' render={ props => {
       
       return (<Login onSubmit ={login}/>)
     }}
      />
    </div>
  );
}

export default App;
