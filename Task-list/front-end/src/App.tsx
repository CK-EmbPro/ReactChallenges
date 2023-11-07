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
 


  const baseUrl = "http://localhost:8000"


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
    <div className='min-h-screen min-w-screen p-16 bg-[#ebebeb]'>
    <div className='font-[Poppins] max-w-[50vw] mx-auto flex flex-col'>
      <div className='flex justify-between'>
        <h1 className='text-[40px] font-bold'>Task List</h1>
        <button onClick={()=> setOpenAddTaskModal(true)} className='flex items-center justify-center h-[50px] border-none font-bold bg-[#713fff] gap-4 rounded-xl p-2 w-[150px] text-white'><AiOutlinePlus className='text-lg'/>Add Task</button>
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