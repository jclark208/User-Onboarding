import React, { useState } from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// const validate = ({name,email,age}) => {
//     const errors={};
//     if(!name){
//         errors.name = 'Must have a valid name'
        
//     } else if ( name.length < 3 ) {
//         errors.name = 'You must have more than three characters'
//     }

// }

 const validate = Yup.object().shape({
     name: Yup.string()
         .min(3, 'Too Short')
        .max(30, 'Damn your name is to long')
         .required('This is required'),
    password: Yup.string()
        .min(7, 'Password isnt long enough')
        .max(20,'Gotta be shorter Hoss')
         .required('This is required'),
    checkbox: Yup.boolean()
        .oneOf([true],'Accept the damn TOS'),
    email: Yup.string()
    .min(3, 'Too Short')
    .max(30, 'Damn your name is to long')
    .email('nice try you piece of shit give me a real email')

 });







function Fields({insideOfApp}){
    const [message, setMessage] = useState('');
    const iHandleSubmit = (values, tools) => {
        axios.post('https://reqres.in/api/users',values)
            .then( res => {
                setMessage(res.data);
                tools.resetForm();
                console.log(res.data);
                insideOfApp(res.data);
            })
            .catch(err => console.log(err))
            

    }
    return(
       <>
    
        <Formik
            initialValues={{name:"",email:"",password:"", checkbox:''}}
            onSubmit={iHandleSubmit}
            // validate={validate}
             validationSchema={validate}
            render={props => {
                return(
                    <Form>
                        <Field name='name' type='text' placeholder='Name'/>
                        <ErrorMessage name='name'/>
                        <Field name='email' type='text' placeholder='Email'/>
                        <ErrorMessage name='email'/>
                        <Field name='password' type='text' placeholder='Password'/>
                        <ErrorMessage name='password'/>
                        <Field name='checkbox' type='checkbox'/>
                        <ErrorMessage name='checkbox'/>
                        

                        <input type='submit' />
                    </Form>
                    
                )
            }}
        
        
        
        
        />


</>
    )
}



export default Fields