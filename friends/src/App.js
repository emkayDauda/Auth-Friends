import React, {useState} from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";
import axiosWithAuth from "./utils/axiosWithAuth";

const login = (formValues, actions) => {
  axios
    .post("http://localhost:5000/api/login", {
      username: formValues.username,
      password: formValues.password
    })
    .then(res => {
      console.log(res.data);
      localStorage.setItem("token", res.data.payload);
    })
    .catch(error => {
      console.log(error);
    });

  actions.resetForm();
};

const initialFriendValues = {
  name: "",
  age: "",
  email: ""
}

function App(props) {
  const [friendForm, setFriendForm] = useState(initialFriendValues)
  const [isEditing, setEdingFriend] = useState(false)
  const [id, setId] = useState(0)


  const setEditing = (obj) => {
    setEdingFriend(true)
    setFriendForm(obj)
  }

  const editFriend = (formValues, actions) => {
    axiosWithAuth()
      .post(`http://localhost:5000/api/friends${id}`, {
        name: formValues.name,
        email: formValues.email,
        age: formValues.age
      })
      .then(res => {
        console.log(res.data);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  
    actions.resetForm();
  };

  const addFriend = (formValues, actions) => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", {
        name: formValues.name,
        email: formValues.email,
        age: formValues.age
      })
      .then(res => {
        console.log(res.data);
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  
    actions.resetForm();
  };
  console.log(props);
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Login
        </NavLink>
        <NavLink to="/friends">Friends</NavLink>
        {/* <NavLink  to='/new-friend'>Friends</NavLink> */}
      </nav>

      <Route
        exact
        path="/"
        render={props => {
          return <Login onSubmit={login} />;
        }}
      />

      <Route
        path="/friends"
        render={props => {
          return <FriendsList {...props} setFriendForm = {setEditing} />;
        }}
      />
      <Route
        path="/new-friend"
        render={props => {
          return <NewFriend {...props} addFriend={addFriend} isEditing = {isEditing} initialValues={friendForm} />;
        }}
      />
    </div>
  );
}

export default withRouter(App);
