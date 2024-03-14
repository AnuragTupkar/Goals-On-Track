import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Tools = () => {
  return (
    <>
      <div className='flex justify-center items-center h-[35rem]'>
          <Link to="/newtask">
            <div className=' h-[15rem] w-[15rem] bg-[#26253B] rounded-md text-white flex justify-center text-center m-20 items-center'>
               <h1>To-do</h1>
            </div>
          </Link>
          <Link to="/notes">
          <div className=' h-[15rem] w-[15rem] bg-[#26253B] rounded-md text-white flex justify-center text-center m-20 items-center'>
               <h1>Note Taking</h1>
            </div>
            </Link>
            <Link to="/stopwatch">
            <div className=' h-[15rem] w-[15rem] bg-[#26253B] rounded-md text-white flex justify-center text-center m-20 items-center'>
               <h1>Timer</h1>
            </div>
            </Link>
            
      </div>
    </>
  )
}

export default Tools