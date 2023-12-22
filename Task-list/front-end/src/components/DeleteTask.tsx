import React, { FormEvent, SetStateAction, useState } from 'react'
import { toast } from 'react-hot-toast'
interface DeleteTaskProps{
  closeDeleteTaskModal: React.Dispatch<SetStateAction<boolean>>
  deleteId : string
}



const DeleteTask = ({closeDeleteTaskModal, deleteId}: DeleteTaskProps) => {

  const [toastState, setToastState] = useState<boolean >(false)
  const baseUrl = "https://task-list-backend-service.onrender.com"


  const handleDeleteSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let delSubmit= await fetch(`${baseUrl}/deleteTodo/${deleteId}`, {
      method: "DELETE",
    })

    if(delSubmit.status === 204){
      setToastState(true); 
      toast.success("Successfully deleted");
  
      setTimeout(() => {
       
        closeDeleteTaskModal(false);
        setToastState(false);
        
      }, 2000);
    }
    
  }

  return (
    <div className='w-[100vw] h-[100vh] fixed top-0 left-0 border border-red-400'>
    <div  className=' w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center  bg-[#443d3d] opacity-[.6]'></div>
    <div className='absolute left-[33vw] top-[35vh] bg-white w-[35vw] flex flex-col gap-5 items-center py-[60px] px-[90px] font-[Poppins] rounded-3xl'>
      <p className=' font-bold text-center text-[20px]'>Are you sure you want to delete this task ?</p>
      <form onSubmit={handleDeleteSubmit} className='flex gap-5'>
        <button  className='text-white p-2 w-[90px] rounded-xl bg-[#713fff] shadow-lg'>Delete</button>
        <div onClick={()=> closeDeleteTaskModal(false)} className='text-[#91929e] p-2 w-[90px] rounded-xl border-2 text-center hover:cursor-pointer'>Cancel</div>
      </form>
    </div>
    </div>
  )
}

export default DeleteTask