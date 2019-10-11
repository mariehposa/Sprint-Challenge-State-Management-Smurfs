import React from 'react';
import {Formik, Field, Form} from 'formik';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

const initialFormValues = {
    name: '',
    height: '',
    age: '',
}

export function SmurfForm ({postSmurf}) {
    const AddForm = (formValues, actions) => {
        const newValue = {
          name: formValues.name,
          height: formValues.height,
          age: formValues.age,
          id: Date.now(),
        }
      
        postSmurf(newValue)
        actions.resetForm()
      }
    return (
       <Formik
           initialValues={initialFormValues}
           onSubmit={AddForm}
           render={props => {
               return(
                   <Form>
                       <Field name="name" type="text" placeholder="Enter your name"/>
                       <Field name="height" type="text" placeholder="Enter your height"/>
                       <Field name="age" type="text" placeholder="Enter your age"/> 
                       <button type="submit" style={{backgroundColor: 'green'}}>Add</button>
                   </Form>
               )
           }}
        />
    );
}

export default connect(
    state => state, 
    actionCreators
)(SmurfForm)