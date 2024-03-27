import React from 'react'
import {useSelector } from 'react-redux';
const Navbar = () => {
  const {tasksList} = useSelector((state)=>state.tasks);
  console.log("ra",tasksList);
  return (
    <div>
        <h1 className="text-center my-4 text-primary">Project Management</h1>
        <p className='text-center lead'>Currently 0 task(s) pending</p>
    </div>
  )
}

export default Navbar;
