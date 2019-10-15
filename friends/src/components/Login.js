import React from 'react';
import { Form, Formik, Field } from "formik";


const initialValues = {
    username: "",
    password: ""
}
export default Login = ({onSubmit}) => {
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