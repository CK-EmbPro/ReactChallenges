import React, { SetStateAction } from 'react'
import {TiTimes} from 'react-icons/ti'

interface AddTaskProps{
  closeAddTaskModal: React.Dispatch<SetStateAction<boolean>>
}

const AddTask = ({closeAddTaskModal}: AddTaskProps) => {
  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-0'>

    
    <div className=' w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center  bg-[#443d3d] opacity-[.6]'></div>
    <div className='absolute left-[30vw] top-[33vh] bg-white w-[40vw] h-[350px] p-10 font-[Poppins] rounded-3xl flex flex-col gap-6'>
      <div className=' flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Add Task</h1>
        <TiTimes onClick={()=> closeAddTaskModal(false)} className='text-2xl hover:cursor-pointer'/>
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
    
    </div>
  )
}

export default AddTask