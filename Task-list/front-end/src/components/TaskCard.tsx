import React, { useState } from 'react'
import CircularProgress from './CircularProgress'
import Edit from '../assets/icons/edit.svg'
import Delete from '../assets/icons/delete.svg'

const TaskCard = () => {
  const [first, setfirst] = useState()
  return (
    <div className='flex items-center justify-between bg-white  max-h-[140px] h-[90px] my-10 rounded-3xl px-10'>

      <div className=''>
        <p className='text-[#94989e]'>Task</p>
        <p>Go to gym</p>
      </div>

      <div>
        <p className='text-[#7d8592]'>Priority</p>
        <p className='font-bold text-lg text-[#f73446]'>High</p>
      </div>

      <div className='relative w-[130px] h-[50px]'>
        <button className='bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] rounded-lg absolute  top-2 left-7'>
          To Do
        </button>

        <button className='bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] rounded-lg absolute hidden left-2 top-2'>
          In progress
        </button>

        <button className='bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] rounded-lg absolute hidden  left-7 top-2'>
          Done
        </button>
      </div>
      

      <CircularProgress/>

      <div className='flex gap-6'>
        <img className='hover:cursor-pointer' src={Edit}/>
        <img className='hover:cursor-pointer' src={Delete}/>
      </div>
    </div>
  )
}

export default TaskCard