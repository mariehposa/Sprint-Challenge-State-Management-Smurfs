import React from 'react';
import {Formik, Field} from 'formik';

const initialFormValues = {
    name: '',
    height: '',
    age: '',
}

export default function SmurfForm () {
    return (
       <Formik
           initialValues={initialFormValues}
           render={props => {
               return(
                   <Form>
                       <Field name="name" type="text" placeholder="Enter your name"/>
                       <Field name="height" type="text" placeholder="Enter your height"/>
                       <Field name="age" type="text" placeholder="Enter your age"/> 
                       <button type="submit">Add</button>
                   </Form>
               )
           }}
        />
    );
}