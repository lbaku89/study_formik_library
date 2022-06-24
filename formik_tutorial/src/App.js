import './App.css';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function App(){
  return (
    <>
      <Formik
        initialValues={{
          firstName:'',
          lastName:'',
          email:''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
          lastName: Yup.string()
          .max(20, 'Must be 20 character or less')
          .required('required'),
          email:Yup.string().email('Invalid email address').required('Required'),
        })}
        onSubmit={
          (values,{setSubmitting})=>{
            setTimeout(()=>{
              alert(JSON.stringify(values,null,2));
              setSubmitting(false);
            },400);
          }
        }
      >

        <Form>
          <label htmlFor='firstName'>First Name</label>
          <Field name="firstName" type="text"></Field>
          <ErrorMessage name="firstName" />

          <label htmlFor='lastName'>Last Name</label>
          <Field name="lastName" type="text"></Field>
          <ErrorMessage name="lastName" />

          <label htmlFor='email'>Email Address</label>
          <Field name="email" type="email"></Field>
          <ErrorMessage name="email" />
          
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default App;
