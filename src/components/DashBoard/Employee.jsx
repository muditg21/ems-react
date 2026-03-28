import React from 'react'
import Headers from '../others/Headers'
import TaskList from '../others/TaskList'

const Employee = () => {
  return (
    <div className='bg-black h-screen text-white p-8'>
        <Headers />
        <TaskList />
    </div>
  )
}

export default Employee