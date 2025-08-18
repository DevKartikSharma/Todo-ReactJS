import React, { useState } from 'react'
import { FaTasks } from "react-icons/fa";

const Navbar = ({showCompleted,setShowCompleted,showTaskTodo,setShowTaskTodo}) => {
  const handleshow = ()=>{
    setShowCompleted(true)
    setShowTaskTodo(false)
  }
  const handlehome = ()=>{
    setShowTaskTodo(true)
    setShowCompleted(false)
  }
  return (
    <nav className='flex md:justify-around justify-between md:p-0 px-3 h-15 w-[90%] bg-[rgb(49,49,49)] items-center m-4 border-none rounded-[10px] box-border sticky top-2'>
      <div className="logo font-extrabold text-2xl flex justify-center items-center space-x-2 ">
        <FaTasks className='mt-1'/><span className='sm:inline-flex hidden'>Todo</span>
      </div>
      <div className=" flex items-center others sm:space-x-[2px] space-x-[0px] md:font-extrabold font-bold md:text-xl text-[18px]">
        <span onClick={handlehome} className={`py-1 sm:px-4 px-2 rounded-lg cursor-pointer border-[rgb(49,49,49)] hover:border-[rgb(69,69,69)] sm:border-[2px] border-none hover:border-[2px] ${showTaskTodo ? "bg-[rgb(67,67,67)]":""}`}>Home</span>
        <span onClick={handleshow} className={`py-1 sm:px-4 px-2 rounded-lg cursor-pointer border-[rgb(49,49,49)] hover:border-[rgb(69,69,69)] sm:border-[2px] border-none hover:border-[2px] ${showCompleted ? "bg-[rgb(67,67,67)]":""}`}>Show Completed</span>
      </div>
    </nav>
  )
}

export default Navbar
