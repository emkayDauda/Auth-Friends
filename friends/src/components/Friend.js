import React from "react";
import { Button, Card, Heading, Content } from "react-bulma-components";
import styled from "styled-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

export default function Friend(props) {
    console.log(props);
    
    const { friend, onDelete, setFriendForm, history } = props
  const { name, age, email, id } = friend;
  return (
    <StyledCard>
      <Heading>{name}</Heading>
      <Content>{email}</Content>
      <Content>{`Age: ${age}`}</Content>
      <div>
        <Button
          onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            setFriendForm({
                name: friend.name,
                email: friend.email,
                age: friend.age
              })

              history.push('/new-friend')
          }
          }
          color="dark"
        >
          Edit
        </Button>
        <Button onClick={() => onDelete(id)} color="danger">
          Delete
        </Button>
      </div>
    </StyledCard>
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
