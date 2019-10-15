import React from 'react';
import { Button } from "react-bulma-components";
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
            return <Form>
                <Field name="username" type="text" placeholder="username" />
                <Field name="password" type="password" placeholder="password" />
                <button type='submit' >Submit</button>
            </Form>
        }}
         />
    )
}