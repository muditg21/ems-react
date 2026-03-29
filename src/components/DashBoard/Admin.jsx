import React from 'react'
import Headers from '../others/Headers'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const Admin = () => {
  return (
    <div className='bg-black h-screen text-white p-8'>
      <Headers />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default Admin