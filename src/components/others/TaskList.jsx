import React from 'react'

const TaskList = () => {
    return (
        <div>
        <div className='font-bold flex items-centre justify-between gap-4 mt-10'>
          <div className='bg-red-500 w-[45%] h-40 rounded-2xl p-3'>0<br />New task</div>
          <div className='bg-blue-500 w-[45%] h-40 rounded-2xl p-3'>0<br />completed</div>
          <div className='bg-green-500 w-[45%] h-40 rounded-2xl p-3'>1<br />failed</div>
          <div className='bg-yellow-500 w-[45%] h-40 rounded-2xl p-3'>0<br />Accepted</div>
        </div>
        <div id='tasklist' className=' h-70 mt-8 py-5 px-2 flex items-start justify-centre gap-10 flex-nowrap overflow-x-auto'>
            <div className='shrink-0 h-full w-70 rounded-3xl bg-amber-400 p-3'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 px-2 rounded-sm'>High</h3>
                    <h4>29 march</h4>
                </div>
                <h2 className='mt-2 font-semibold text-xl'>akfd Note</h2>
                <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus. lorem10</p>
            </div>
            <div className='shrink-0 h-full w-70 rounded-3xl bg-blue-400 p-3'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 px-2 rounded-sm'>High</h3>
                    <h4>29 march</h4>
                </div>
                <h2 className='mt-2 font-semibold text-xl'>xcz Note</h2>
                <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus. lorem10</p>
            </div>
            <div className='shrink-0 h-full w-70 rounded-3xl bg-green-400 p-3'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 px-2 rounded-sm'>High</h3>
                    <h4>29 march</h4>
                </div>
                <h2 className='mt-2 font-semibold text-xl'>dfAA Note</h2>
                <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus. lorem10</p>
            </div>
            <div className='shrink-0 h-full w-70 rounded-3xl bg-red-400 p-3'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 px-2 rounded-sm'>High</h3>
                    <h4>29 march</h4>
                </div>
                <h2 className='mt-2 font-semibold text-xl'>ddvz Note</h2>
                <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus. lorem10</p>
            </div>
            <div className='shrink-0 h-full w-70 rounded-3xl bg-violet-400 p-3'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 px-2 rounded-sm'>High</h3>
                    <h4>29 march</h4>
                </div>
                <h2 className='mt-2 font-semibold text-xl'>dds Note</h2>
                <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus. lorem10</p>
            </div>
            <div className='shrink-0 h-full w-70 rounded-3xl bg-pink-400 p-3'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 px-2 rounded-sm'>High</h3>
                    <h4>29 march</h4>
                </div>
                <h2 className='mt-2 font-semibold text-xl'>dvs Note</h2>
                <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus. lorem10</p>
            </div>
            <div className='shrink-0 h-full w-70 rounded-3xl bg-rose-400 p-3'>
                <div className='flex justify-between '>
                    <h3 className='bg-red-600 px-2 rounded-sm'>High</h3>
                    <h4>29 march</h4>
                </div>
                <h2 className='mt-2 font-semibold text-xl'>cv Note</h2>
                <p className='mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, possimus. lorem10</p>
            </div>
        </div>
        </div>
    )
}

export default TaskList