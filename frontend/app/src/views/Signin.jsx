import React, { useEffect, useState } from "react";
import { 
  Card, CardHeader, CardBody,
  Row, Col, Label, Input, Button
} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { useNavigate  } from 'react-router-dom';
const LoginForm = () => {
  const navigate  = useNavigate ();
  return (
    <>
      <Formik
      initialValues={{
        password: '',
        nickname: '',
        email: '',
      }}
      onSubmit={async (values) => {
        let data = await fetch(
          "http://localhost:3002/user/create",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Adjust the content type as per your API's requirements
            },
            body:JSON.stringify({
              "userName": values.nickname,
              "email": values.email,
              "password": values.password
            })
          }
        )
        data = await data.json()
        if (data?._id) {
          navigate('/')
        }
      }}
    >
      <Form>
        <Label className="my-2" htmlFor="email">
          Email
        </Label>
        <Field
          name="email"
          placeholder="email"
          type="email"
          as={Input}
        />
        <Label className="my-2" htmlFor="nickname">
          Nickname
        </Label>
        <Field
          name="nickname"
          placeholder="nickname"
          type="text"
          as={Input}
        />
        <Label className="my-2" htmlFor="password">
          Password
        </Label>
        <Field
          name="password"
          placeholder="password"
          type="password"
          as={Input}
        />
        <Button type="submit" className="my-2">
          Submit
        </Button>
      </Form>
    </Formik>
    </>
  )
}

const Signin = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Row>
          <Col>
            <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: '50vw'
            }}
            >
              <CardHeader className="text-center">
                Sign in
              </CardHeader>
              <CardBody>                
                <LoginForm />                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Signin;