import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Constants from '../api/Constants';
import Navbar from '../components/navbar';
import Header from '../components/Header';
import {FaAddressCard} from 'react-icons/fa'

const RegisterPage = () => {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Fisrt Name is Required'),
    lastName: Yup.string().required('Last Name is Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required')
  })

  const onSubmit = (values) => {
    axios.post(Constants.USERS_URL, JSON.stringify(values))
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  }

  const formStyle = {
    style: {
      border: '1px solid rgba(0, 0, 0, 0.125)',
      boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
      borderRadius: 10,
      padding: '2rem 4rem',
      marginTop: '2rem',
    }
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6" style={formStyle.style}>
            <div className="wrapper">
              <h1 className='text-lg text-center'>Sign Up</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="mb-3">
                      <Field type="text" className="form-control" id="firstName" name="firstName" placeholder='First Name' />
                      <ErrorMessage name="firstName" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="text" className="form-control" id="lastName" name="lastName" placeholder='Last Name' />
                      <ErrorMessage name="lastName" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="email" className="form-control" id="email" name="email" placeholder='Email' />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="password" className="form-control" id="password" name="password" placeholder='Password' />
                      <ErrorMessage name="password" component="div" className="text-danger" />
                    </div>
                    <div className="mb-3">
                      <Field type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder='Confirm Password' />
                      <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                    </div>
                    <p className="text-center">
                      Already have an account? Login <a href="/LoginPage">Here</a>
                    </p>
                    <button type="submit" className="btn btn-block btn-primary" disabled={isSubmitting}><FaAddressCard/>  Sign Up</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage;
