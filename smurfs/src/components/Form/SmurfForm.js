import React from 'react';
import {Formik, Field} from 'formik';

export default function SmurfForm () {
    return (
       <Formik>
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
       </Formik>
    );
}