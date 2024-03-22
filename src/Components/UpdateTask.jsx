import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const MyVerticallyCenteredModal = (props) => {
   
    const [title,setTitle] = useState('');
    const [description,setDesription]=useState('');
    const updateTask=()=>{
        props.onHide()
    }
  return (
    <div>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Add Task</Form.Label>
        <Form.Control type="text" value={title} placeholder="Enter Task Title" 
        onChange={(event)=>setTitle(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control  type="text" value={description} placeholder="Enter Task Description" 
        onChange={(event)=>setDesription(event.target.value)}  />
      </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="text-end">
      <Button variant="primary" type="submit" onClick={(e)=>updateTask(e)}>
        Update Task
      </Button>
        </div>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default MyVerticallyCenteredModal
