import React, { FormEvent, useState } from 'react'
import TaskCard from './components/TaskCard'
import {AiOutlinePlus} from 'react-icons/ai'
import AddTask from './components/AddTask'
import DeleteTask from './components/DeleteTask'
import EditTask from './components/EditTask'
import toast, {Toaster} from 'react-hot-toast'

const App = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState<boolean>(false)
  const [openEditTaskModal, setOpenEditTaskModal] = useState<boolean>(false)
  const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState<boolean>(false)
  const [priority, setPriority] = useState<string>("")
  const [task, setTask] = useState<string>("")
  const [toastState, setToastState] = useState<boolean >(false)
  const [editId, setEditId] = useState<string>("")
  const [deleteId, setDeleteId] = useState<string>("")
  const [highState, setHighState] = useState<boolean>(false)
  const [mediumState, setMediumState] = useState<boolean>(false)
  const [lowState, setLowState] = useState<boolean>(true)
 


  const baseUrl = "https://task-list-backend-service.onrender.com"


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    let submit = await fetch(`${baseUrl}/addTodo`, {
      method: "POST",
      body: JSON.stringify({
        task,
        priority
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if(submit.ok) {
      setToastState(true); 
      toast.success("Successfully added");
  
      setTimeout(() => {
        setOpenAddTaskModal(false);
        setToastState(false);
        
      }, 2000);
      setTask("")
      setLowState(true)
      setHighState(false)
      setMediumState(false)
    }
  }
  
  return (
    <div className='min-h-screen min-w-screen md:p-16 p-4 pt-10  bg-[#ebebeb]'>
    <div className='font-[Poppins] md:max-w-[60vw]   mx-auto flex flex-col'>
      <div className='flex justify-between items-center'>
        <h1 className='md:text-[2em] text-[5vw] font-bold'>Task List</h1>
        <button onClick={()=> setOpenAddTaskModal(true)} className='flex items-center md:justify-center justify-evenly h-[50px] border-none font-bold bg-[#713fff] md:gap-4  rounded-xl md:p-2 md:w-[150px] w-[22.5vw] text-white md:text-[1em] text-[2.5vw]'><AiOutlinePlus className='text-lg'/>Add Task</button>
      </div>
      <TaskCard highState ={highState} lowState = {lowState} mediumState= {mediumState} setEditId={setEditId}  setDeleteId={setDeleteId} setOpenEditTaskModal={setOpenEditTaskModal} setOpenDeleteTaskModal={setOpenDeleteTaskModal} task={task} priority={priority} handleSubmit={handleSubmit} />
    </div> 

    {openAddTaskModal && <AddTask closeAddTaskModal = {setOpenAddTaskModal} task= {task} priority={priority} setPriority={setPriority} setTask={setTask} handleSubmit={handleSubmit} highState={highState} mediumState={mediumState} lowState={lowState} setHighState={setHighState} setMediumState={setMediumState} setLowState={setLowState}  />}
    {openEditTaskModal && <EditTask editId={editId} closeEditTaskModal = {setOpenEditTaskModal}/>}
    {openDeleteTaskModal && <DeleteTask deleteId = {deleteId} closeDeleteTaskModal = {setOpenDeleteTaskModal}/>}
    
    <Toaster/>
    </div>
  )
}

export default App