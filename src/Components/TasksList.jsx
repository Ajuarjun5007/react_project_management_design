import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './UpdateTask';
MyVerticallyCenteredModal
const TasksList = () => {
    const updateTask = ()=>{
        setModalShow(true);
        console.log("updateTask");
    }
    const deleteTask = ()=>{
        console.log("deleteTask");
        
    }
    const [modalShow,setModalShow]=useState(false);
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className='text-center'>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td><Button variant="primary" className='mx-3' onClick={()=>updateTask()}><i className="bi bi-pencil-square"></i></Button>
          <Button variant="primary" onClick={()=>deleteTask()}><i className="bi bi-trash3"></i></Button></td>
        </tr>
      </tbody>
    </Table>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default TasksList
