import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "react-bulma-components";

export default function newFriend({addFriend, initialValues}){
    return <Formik 
        onSubmit = {addFriend}
        initialValues = {initialValues}
        render = {props => {
            return <Form>
                <Field name ='name' type='text' placeholder='Friend name' />
                <Field name ='age' type='text' placeholder='Friend age' />
                <Field name ='email' type='text' placeholder='Friend email' />
                <Button color='light' type='submit'>Add Friend</Button>
            </Form>
        }}
    />
}