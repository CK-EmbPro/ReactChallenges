import React, { ChangeEvent, FormEvent, SetStateAction, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {TiTimes} from 'react-icons/ti'

interface AddTaskProps{
  closeAddTaskModal: React.Dispatch<SetStateAction<boolean>>,
  setTask: React.Dispatch<SetStateAction<string>>
  setPriority: React.Dispatch<SetStateAction<string>>
  handleSubmit: (e:FormEvent<HTMLFormElement>)=>void
  setHighState:  React.Dispatch<SetStateAction<boolean>>
  setMediumState: React.Dispatch<SetStateAction<boolean>>
  setLowState:  React.Dispatch<SetStateAction<boolean>>
  highState: boolean
  task: string,
  mediumState: boolean
  lowState: boolean
  priority:string
}



const AddTask = ({closeAddTaskModal, task, priority,highState, mediumState, lowState, setTask, setPriority, handleSubmit, setHighState, setMediumState, setLowState}: AddTaskProps) => {

  const baseUrl = "https://task-list-backend-service.onrender.com"





  
  const handlePriorityChange = ()=>{
    if(lowState) {
      setPriority("low")
    }
    if(highState){
      setPriority("high")
    }
    if(mediumState){
      setPriority("medium")
    }
  }
  
  useEffect(() => {
    handlePriorityChange();
  }, [highState, mediumState, lowState])
  


  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>):void=>{
    setTask(e.target.value)
  }
  



  return (
    <div className='w-[100vw] h-[100vh] fixed top-0 left-0'>

    
    <div className=' w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center  bg-[#443d3d] opacity-[.6]'></div>
    <div className='absolute md:left-[30vw] left-[20vw] border border-red-500  md:top-[33vh] top-[8em] bg-white md:w-[40vw] w-[60vw] h-[350px] p-10 font-[Poppins] rounded-3xl flex flex-col gap-6'>
      <div className=' flex justify-between items-center'>
        <h1 className='text-xl font-bold md:text-[1em] text-[3.3vw] '>Add Task</h1>
        <TiTimes onClick={()=> closeAddTaskModal(false)} className='text-2xl hover:cursor-pointer'/>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <label htmlFor="taskInput" className='font-bold text-[#595a5d] md:text-[1em] text-[2.7vw] '>
          Task
        </label>

        <input className='border p-3 rounded-xl outline-none text-sm text-[#7a7d82]' type="text" placeholder='Type your text here...' value={task} onChange={handleTaskChange} />

        <p className='font-bold text-[#595a5d] md:text-[1em] text-[2.7vw] '>Priority</p>
        <div className='flex md:gap-7 gap-[4vw]'>
          <div 
            onClick={()=>{
              setHighState(true);
              setMediumState(false);
              setLowState(false)
            }} 

            className={`${highState ? "bg-[#f73446] text-white": ""} md:text-[1em] text-[2.7vw] px text-center hover:cursor-pointer border  border-[#f73446] text-[#f73446] w-[100px] rounded-lg py-1`}>High</div>

          <div 
            onClick={()=>{
              setMediumState(true);
              setLowState(false)
              setHighState(false);
            }} 
 

            className={`${mediumState ? "bg-[#ffbd21] text-white": ""} md:text-[1em] text-[2.7vw] px text-center hover:cursor-pointer border border-[#ffbd21] text-[#ffbd21] w-[100px] rounded-lg py-1`}>Medium</div>

          <div 
            onClick={()=>{
              setLowState(true)
              setMediumState(false);
              setHighState(false);
            }} 


            className={`${lowState ? "bg-[#0ec10e] text-[white] "  : ""} md:text-[1em] text-[2.7vw] px text-center hover:cursor-pointer  border border-[#0ec10e]  text-[#0ec10e] w-[100px] rounded-lg py-1`}>Low</div>
        </div>

        <div className='flex justify-end'>
          <button  className='bg-[#7d8592] p-2 w-[90px] md:text-[1em] text-[2.5vw] text-white font-bold rounded-xl'>Add</button>
        </div>
      </form>

    
    </div>
    
    </div>
  )
}

export default AddTask