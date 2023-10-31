import React from 'react'

const DeleteTask = () => {
  return (
    <div className='bg-white w-[35vw] flex flex-col gap-5 items-center py-[60px] px-[90px] font-[Poppins] rounded-3xl'>
      <p className=' font-bold text-center text-[20px]'>Are you sure you want to delete this task?</p>
      <div className='flex gap-5'>
        <button className='text-white p-2 w-[90px] rounded-xl bg-[#713fff] shadow-lg'>Delete</button>
        <button className='text-[#91929e] p-2 w-[90px] rounded-xl border-2 '>Cancel</button>
      </div>
    </div>
  )
}

export default DeleteTask