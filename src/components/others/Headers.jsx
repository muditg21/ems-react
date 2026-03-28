import React from 'react'

const Headers = () => {
  return (
    <div>
    <div className='flex items-end justify-between' >
        <h1>hello ,<br /><span>Mudit</span></h1>

        <button className='bg-amber-200 p-2 text-black'>Logout</button>

        
    </div>
     <div className='font-bold flex items-centre justify-between gap-4 mt-10'>
          <div className='bg-red-500 w-[45%] h-40 rounded-2xl p-3'>0<br />New task</div>
          <div className='bg-blue-500 w-[45%] h-40 rounded-2xl p-3'>0<br />completed</div>
          <div className='bg-green-500 w-[45%] h-40 rounded-2xl p-3'>1<br />failed</div>
          <div className='bg-yellow-500 w-[45%] h-40 rounded-2xl p-3'>0<br />Accepted</div>
        </div>

     </div>   
  )
}

export default Headers