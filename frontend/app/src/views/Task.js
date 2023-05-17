import React, { useEffect, useState } from "react";
import { 
  Card, CardHeader, CardBody,
  Row, Col, Label, Input, Button,
  Table,
} from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/taskSlice'

const LoginForm = () => {
  const user = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  return (
    <>
      <Formik
      initialValues={{
        duration: '',
        name: '',
      }}
      onSubmit={async (values) => {
        let data = await fetch(
          "http://localhost:3001/task/create",
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', // Adjust the content type as per your API's requirements
            },
            body:JSON.stringify({
              "duration": values.duration,
              "name": values.name,
              "userId": user._id
            })
          }
        )
        data = await data.json()
        if (data?._id) {
          const fetcData = async () => {
            try {
              const response = await fetch(
                `http://localhost:3001/task/get?userId=${user._id}`
              )
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const responseData = await response.json();
              console.log(responseData)
              // setResult(responseData);
              dispatch(addTask(responseData))
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
          fetcData()
        }
        console.log(data)
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
  const task = useSelector((state)=> state.task)
  const dispatch = useDispatch()
  const deleteRequest = async (id)=> {
    try {
      const response = await fetch(
        `http://localhost:3001/task/delete?_id=${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let data = await response.json()
      let nTask = task.taskList
      console.log(nTask)
      const result = nTask.filter(item => item._id !== id)
      dispatch(addTask(result))

    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }
  const list = data.map((item, index) => {
    return (
      <tr key={index}>
        <th scope="row">
          {index+1}
        </th>
        <td>
          {item.name}
        </td>
        <td>
          {item.duration}
        </td>
        <td>
          <Button onClick={deleteRequest.bind(null, item._id)} color="danger">
            delete
          </Button>
        </td>
      </tr>
    )
  })
 return list
}

const TaskList = () => {
  const task = useSelector((state)=> state.task)
  const user = useSelector((state)=> state.user)
  const dispatch = useDispatch()
  // const [result,setResult] = useState([])
  useEffect(()=>{
    const fetcData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/task/get?userId=${user._id}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData)
        // setResult(responseData);
        dispatch(addTask(responseData))
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetcData()
  }, [])
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
            <th>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          <TaskBodyList
            data={task.taskList}
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