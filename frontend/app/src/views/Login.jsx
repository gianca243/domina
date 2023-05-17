import React from "react";
import { 
  Card, CardHeader, CardBody,
  Row, Col, Label, Input, Button
} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux'
import { addUser } from "../redux/userSlice";
import { useNavigate  } from 'react-router-dom';
const LoginForm = () => {
  const navigate  = useNavigate ();
  const dispatch = useDispatch();
  return (
    <>
      <Formik
      initialValues={{
        password: '',
        nickName: '',
      }}
      onSubmit={async (values) => {
        console.log(values);
        const response = await fetch(
          `http://localhost:3002/user/singin?userName=${values.nickName}&password=${values.password}`
        )
        let data = await response.json()
        data = {
          nickName: data.userName,
          email: data.email,
          auth: data.login,
          _id: data._id
        }
        dispatch(addUser(data))
        if (data.auth){
          navigate('/task')
        }
      }}
    >
      <Form>
        <Label className="my-2" htmlFor="email">
          NickName
        </Label>
        <Field
          name="nickName"
          placeholder="nickName"
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