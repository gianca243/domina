import React, { useEffect, useState } from "react";
import { 
  Card, CardHeader, CardBody,
  Row, Col, Label, Input, Button
} from 'reactstrap';
import { Formik, Form, Field } from 'formik';

const LoginForm = () => {
  return (
    <>
      <Formik
      initialValues={{
        password: '',
        email: '',
      }}
      onSubmit={async (values) => {
        console.log(values);
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

const Login = () => {
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
                Login
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

export default Login;