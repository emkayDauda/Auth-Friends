import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Login from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="App">
     <nav>
       <NavLink exact to='/'>Login</NavLink>
       {/* <NavLink  to='/'>Login</NavLink> */}
     </nav>

     <Route exact path = '/' component={Login} />
    </div>
  );
}

export default App;
