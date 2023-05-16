import Navbar from '../components/navbar';
import Header from '../components/Header';
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Constants from '../api/Constants';
import {FaSignInAlt} from 'react-icons/fa'

const formStyle = {
  style: {
    border: '1px solid rgba(0, 0, 0, 0.125)',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
    borderRadius: 10,
    padding: '2rem 4rem',
    marginTop: '2rem',
  }
}

const LoginPage = () => {

  const [requestResponse, setRequestResponse] = useState({
    requestMessage: "",
    className: ""
  })

  const navigate = useNavigate();

  const initialState = {
    email: "",
    password: ""
  };

  const validationSchema = (values) => Yup.object({
    email: Yup.string().required("Email is required").email("Email not valid"),
    password: Yup.string().required("Password is required")
  });

  const onSubmit = (values) => {
    axios
      .post(Constants.LoGIN_URL, values)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setRequestResponse({
          requestMessage: "Login successful",
          className: "alert alert-success"
        });
        navigate("/");
      },
        (error) => {
          console.log(error.response.data.message);
          setRequestResponse({
            requestMessage: error.response.data.message,
            className: "alert alert-danger"
          })
        })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6" style={formStyle.style}>
            <div className="wrapper">
              <h2>Login</h2>
              <hr />
              <Formik
                initialValues={initialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                validateOnMount
              >

                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group">
                        <label htmlFor="">Email</label>
                        <Field type="text" name="email" className="form-control" />
                        <ErrorMessage name="email">
                          {(errorMessage) => (
                            <small className="text-danger">{errorMessage}</small>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Password</label>
                        <Field type="password" name="password" className="form-control" />
                        <ErrorMessage name="password">
                          {(errorMessage) => (
                            <small className="text-danger">{errorMessage}</small>
                          )}
                        </ErrorMessage>
                      </div>
                      <button type="submit" value='Login' className="btn btn-primary btn-block"><FaSignInAlt/> Login</button>
                    </Form>
                  )
                }}
              </Formik>
              <br />
              <p className="text-center">
                New User <Link to="/RegisterPage">Click Here</Link>
              </p>
              <div className={requestResponse.className}>
                {requestResponse.requestMessage}
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>

    </div>
  )
}

export default LoginPage;
