import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import AddTask from './Components/AddTask'
import { Row,Col } from 'react-bootstrap'
import TasksList from './Components/TasksList'
function App() {

  return (
    <>
    <Navbar/>
    <Row className="justify-content-md-center">
        <Col xs lg="6">
      <AddTask/>
      <TasksList/>
        </Col>
      </Row>
    </>
  )
}

export default App
