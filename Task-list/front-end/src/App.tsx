import React, { useState } from 'react'
import TaskCard from './components/TaskCard'
import {AiOutlinePlus} from 'react-icons/ai'
import AddTask from './components/AddTask'
import DeleteTask from './components/DeleteTask'
import EditTask from './components/EditTask'

const App = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false)
  const [openEditTaskModal, setOpenEditTaskModal] = useState<boolean>(false)
  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState<boolean>(false)
  return (
    <div className='min-h-screen min-w-screen p-16 bg-[#ebebeb]'>
    <div className='font-[Poppins] max-w-[50vw] mx-auto flex flex-col'>
      <div className='flex justify-between'>
        <h1 className='text-[40px] font-bold'>Task List</h1>
        <button onClick={()=> setOpenAddTaskModal(true)} className='flex items-center justify-center h-[50px] border-none font-bold bg-[#713fff] gap-4 rounded-xl p-2 w-[150px] text-white'><AiOutlinePlus className='text-lg'/>Add Task</button>
      </div>
    <TaskCard setOpenEditTaskModal={setOpenEditTaskModal} setOpenDeleteTaskModal={setOpenDeleteTaskModal} />
    </div> 

    {openAddTaskModal && <AddTask closeAddTaskModal = {setOpenAddTaskModal}/>}
    {openEditTaskModal && <EditTask closeEditTaskModal = {setOpenEditTaskModal}/>}
    {openDeleteTaskModal && <DeleteTask closeDeleteTaskModal = {setOpenDeleteTaskModal}/>}
    
    </div>
  )
}

export default App