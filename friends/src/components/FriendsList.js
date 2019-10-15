import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function FriendsList(props) {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res.data);
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }, [])
  return <StyledDiv>
      {
       friends.map(friend => <NavLink to='/friends/:id'><Friend friend={friend}/></NavLink>)   
      }
  </StyledDiv>;
}

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`

{/* <Route key={friend.id} path='/friends/:id' render={props => {
    return <Friend friend={friend}/>
}} /> */}