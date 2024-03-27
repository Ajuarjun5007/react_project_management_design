import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { updateTaskInList } from '../Slices/tasksSlices';
const MyVerticallyCenteredModal = (props) => {
    const {selectedTask} = useSelector((state)=>state.tasks);
    const {tasksList} = useSelector((state)=>state.tasks);
    const [title,setTitle] = useState('');
    const [description,setDescription]=useState('');
    const [id,setId]=useState(0);
    const dispatch = useDispatch();
    const updateTask=()=>{
        props.onHide();
        console.log("id",id);
        console.log("title",title);
        console.log("description",description);
        dispatch(updateTaskInList({id,title,description}));
        console.log("selectedTask",selectedTask);
    }
    useEffect(()=>{
      if(Object.keys(selectedTask).length!==0){
        setTitle(selectedTask.title)
        setDescription(selectedTask.description)
        setId(selectedTask.id)
      }
     
    },[selectedTask])
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
        onChange={(event)=>setDescription(event.target.value)}  />
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
