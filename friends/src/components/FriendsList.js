import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Button, Card, Heading, Content } from "react-bulma-components";
import Friend from "./Friend";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function FriendsList({setFriendForm, history}) {
  const [friends, setFriends] = useState([]);

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <StyledDiv>
      {friends.map(friend => (
        <NavLink key={friend.id} to="/friends/:id">
          <Friend history={history} setFriendForm={setFriendForm} onDelete={deleteFriend} friend={friend} />
        </NavLink>
      ))}
      <StyledCard>
        <Heading>New Friend?</Heading>
        <Content>Click to add</Content>
        <Content>{`Down below `}</Content>
        <div>
          <NavLink to="/new-friend">
            <Button color="primary">Add</Button>
          </NavLink>
          {/* <Button color='danger' >Delete</Button> */}
        </div>
      </StyledCard>
    </StyledDiv>
  );
}

const StyledCard = styled(Card)`
  width: 25rem;
  margin-left: 5rem;
  border-radius: 0.4rem;
  margin-top: 1.5rem;
  padding-bottom: 1rem;

  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

{
  /* <Route key={friend.id} path='/friends/:id' render={props => {
    return <Friend friend={friend}/>
}} /> */
}
