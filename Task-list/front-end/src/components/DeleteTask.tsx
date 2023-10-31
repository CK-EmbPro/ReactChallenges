import React, { SetStateAction } from 'react'
interface DeleteTaskProps{
  closeDeleteTaskModal: React.Dispatch<SetStateAction<boolean>>
}


const DeleteTask = ({closeDeleteTaskModal}: DeleteTaskProps) => {
  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-0'>
    <div  className=' w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center  bg-[#443d3d] opacity-[.6]'></div>
    <div className='absolute left-[33vw] top-[35vh] bg-white w-[35vw] flex flex-col gap-5 items-center py-[60px] px-[90px] font-[Poppins] rounded-3xl'>
      <p className=' font-bold text-center text-[20px]'>Are you sure you want to delete this task ?</p>
      <form action='' className='flex gap-5'>
        <button className='text-white p-2 w-[90px] rounded-xl bg-[#713fff] shadow-lg'>Delete</button>
        <div onClick={()=> closeDeleteTaskModal(false)} className='text-[#91929e] p-2 w-[90px] rounded-xl border-2 text-center hover:cursor-pointer'>Cancel</div>
      </form>
    </div>
    </div>
  )
}

export default DeleteTask