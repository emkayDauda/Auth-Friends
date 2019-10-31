import React from 'react';
import styled from "styled-components";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Form, Formik, Field } from "formik";


const initialValues = {
    username: "",
    password: ""
}
export default function Login({onSubmit}) {
    return (
        <Formik
        initialValues = {initialValues}
        onSubmit = {onSubmit}
        render = {props => {
            return <StyledForm>
                <Field name="username" type="text" placeholder="username" />
                <Field name="password" type="password" placeholder="password" />
                <button type='submit' >Submit</button>
            </StyledForm>
        }}
         />
    )
}

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 30rem;
`