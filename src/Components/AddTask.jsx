import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const AddTask = () => {
    const [title,setTitle] = useState('');
    const [description,setDesription]=useState('');
    const addTask = (e)=>{
        e.preventDefault();
        console.log({title,description});
    }
  return (
    <div className='my-5'>
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
        <div className="text-end">
      <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
        Add Task
      </Button>
        </div>
    </Form>
    </div>
  )
}

export default AddTask
