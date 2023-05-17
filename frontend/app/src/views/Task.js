import React from 'react';
import { 
  Card, CardHeader, CardBody,
  Row, Col, Label, Input, Button,
  Table,
} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
const mocklist = [
  {
    name:"o",
    duration: "3",
    userId: "234"
  },
  {
    name:"o",
    duration: "3",
    userId: "234"
  },
  {
    name:"o",
    duration: "3",
    userId: "234"
  }
]

const LoginForm = () => {
  return (
    <>
      <Formik
      initialValues={{
        duration: '',
        name: '',
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form>
        <Label className="my-2" htmlFor="name">
          Nombre de la tarea
        </Label>
        <Field
          name="name"
          placeholder="tarea"
          type="text"
          as={Input}
        />
        <Label className="my-2" htmlFor="password">
          Duración
        </Label>
        <Field
          name="duration"
          placeholder="duración"
          type="text"
          as={Input}
        />
        <Button type="submit" className="my-2">
          Crear Tarea
        </Button>
      </Form>
    </Formik>
    </>
  )
}

const CardForm = () => {
  return (
    <Card
      className="my-2"
      color="dark"
      inverse
      style={{
        width: '50vw'
      }}
    >
      <CardHeader className="text-center">
        Crear tarea
      </CardHeader>
      <CardBody>        
        <LoginForm />          
      </CardBody>
    </Card>
  )
}

const TaskBodyList = ({data}) => {
  const list = data.map((item, index) => {
    return (
      <tr>
        <th scope="row">
          {index+1}
        </th>
        <td>
          {item.name}
        </td>
        <td>
          {item.duration}
        </td>
      </tr>
    )
  })
 return list
}

const TaskList = () => {
  return (
    <> 
      <Table bordered>
        <thead>
          <tr>
            <th>
              #
            </th>
            <th>
              Nombre de la tarea
            </th>
            <th>
              Duracion de la tarea
            </th>
          </tr>
        </thead>
        <tbody>
          <TaskBodyList
            data={mocklist}
          />
        </tbody>        
      </Table>
    </>
  )
}



const Task = () => {
  return(
    <div className="container">
      <Row className="row justify-content-center">
        <Col>
          <CardForm/>
        </Col>
      </Row>
      <Row className="row justify-content-center">
        <Col>
          <TaskList/>
        </Col>
      </Row>
    </div>
  )
}

export default Task;