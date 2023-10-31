import React from 'react'
import CircularProgress from './components/CircularProgress'
import TaskCard from './components/TaskCard'
import {AiOutlinePlus} from 'react-icons/ai'
import AddTask from './components/AddTask'
import DeleteTask from './components/DeleteTask'
import EditTask from './components/EditTask'

const App = () => {
  return (
    <div className='min-h-screen min-w-screen p-16 bg-[#ebebeb]'>
    {/* <div className='font-[Poppins] max-w-[50vw] mx-auto flex flex-col'>
      <div className='flex justify-between'>
        <h1 className='text-[40px] font-bold'>Task List</h1>
        <button className='flex items-center justify-center h-[50px] border-none font-bold bg-[#713fff] gap-4 rounded-xl bg-blue-700 p-2 w-[150px] text-white'><AiOutlinePlus className='text-lg'/>Add Task</button>
      </div>
      <TaskCard/>
    </div> */}

    {/* <AddTask/> */}
    <EditTask/>
    </div>
  )
}

export default App