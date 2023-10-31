import React from 'react'
import {TiTimes} from 'react-icons/ti'

const AddTask = () => {
  return (
    <div className='bg-white w-[40vw] p-10 font-[Poppins] rounded-3xl flex flex-col gap-6'>
      <div className=' flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Add Task</h1>
        <TiTimes className='text-2xl hover:cursor-pointer'/>
      </div>

      <form action="" className='flex flex-col gap-4'>
        <label htmlFor="taskInput" className='font-bold text-[#595a5d]'>
          Task
        </label>

        <input className='border p-3 rounded-xl outline-none text-sm text-[#7a7d82]' type="text" placeholder='Type your text here...' />

        <p className='font-bold text-[#595a5d]'>Priority</p>
        <div className='flex gap-7'>
          <div className='text-center hover:cursor-pointer border border-[#f73446] text-[#f73446] w-[100px] rounded-lg py-1'>High</div>
          <div className='text-center hover:cursor-pointer border border-[#ffbd21] text-[#ffbd21] w-[100px] rounded-lg py-1'>Medium</div>
          <div className='text-center hover:cursor-pointer border-none bg-green-500 text-white w-[100px] rounded-lg py-1'>Low</div>
        </div>

        <div className='flex justify-end'>
          <button  className='bg-[#7d8592] p-2 w-[90px] text-white font-bold rounded-xl'>Add</button>
        </div>
      </form>

    
    </div>
  )
}

export default AddTask