import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, Container } from "react-bulma-components";
import styled from "styled-components";

export default function NewFriend({ initialValues, addFriend, editFriend, isEditing }) {
  return (
    <StyledContainer>
      <Formik
        onSubmit={isEditing? editFriend :addFriend}
        initialValues={initialValues}
        render={props => {
          return (
            <Form>
              <Field name="name" type="text" placeholder="Friend name" />
              <div></div>
              <Field name="age" type="text" placeholder="Friend age" />
              <div></div>
              <Field name="email" type="text" placeholder="Friend email" />
              <div></div>
              <Button color="primary" type="submit">
                {isEditing? "Edit Friend": "Add Friend"}
              </Button>
            </Form>
          );
        }}
      />
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  margin: 0 auto;
  width: 30rem;

  form {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    div {
        height: .7rem;
    }
    
  }
`;
