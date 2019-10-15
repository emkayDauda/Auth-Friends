import React from "react";
import { Button, Card, Heading,Content, } from "react-bulma-components";
import styled from "styled-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';

export default function Friend({friend, onDelete}) {
    const {name, age, email, id} = friend
    return (
        <StyledCard>
            <Heading>{name}</Heading>
            <Content>{email}</Content>
            <Content>{`Age: ${age}`}</Content>
           <div>
           <Button color='dark' >Edit</Button>
            <Button onClick={() => onDelete(id)} color='danger' >Delete</Button>
           </div>
        </StyledCard>
    );
}

const StyledCard = styled(Card)`
    width: 25rem;
    margin-left: 5rem;
    border-radius: .4rem;
    margin-top: 1.5rem;
    padding-bottom: 1rem;

    div {
        display: flex;
        justify-content: space-evenly;
    }
`