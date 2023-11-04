import React, { ChangeEvent, FormEvent, SetStateAction, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {TiTimes} from 'react-icons/ti'

interface AddTaskProps{
  closeAddTaskModal: React.Dispatch<SetStateAction<boolean>>
}

const AddTask = ({closeAddTaskModal}: AddTaskProps) => {

  const baseUrl = "http://localhost:8000"

  const [highState, setHighState] = useState<boolean>(false)
  const [mediumState, setMediumState] = useState<boolean>(false)
  const [lowState, setLowState] = useState<boolean>(true)
  const [priority, setPriority] = useState<string>("")
  const [task, setTask] = useState<string>("")
  const [toastState, setToastState] = useState<boolean >(false)


  
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
  

  console.log("Priority status ", priority)
  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>):void=>{
    setTask(e.target.value)
  }
  

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
  
    if (submit.ok) {
      setToastState(true); 
      console.log("toastState: true");
  
      
      toast.success("Success");
  
      setTimeout(() => {
       
        closeAddTaskModal(false);
        
       
        setToastState(false);
        console.log("toastState: false");
      }, 2000);
    }
  }
  
  console.log("Toaststate is", toastState)
  

  return (
    <div className='w-[100vw] h-[100vh] absolute top-0 left-0'>

    
    <div className=' w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center  bg-[#443d3d] opacity-[.6]'></div>
    <div className='absolute left-[30vw] top-[33vh] bg-white w-[40vw] h-[350px] p-10 font-[Poppins] rounded-3xl flex flex-col gap-6'>
      <div className=' flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Add Task</h1>
        <TiTimes onClick={()=> closeAddTaskModal(false)} className='text-2xl hover:cursor-pointer'/>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <label htmlFor="taskInput" className='font-bold text-[#595a5d]'>
          Task
        </label>

        <input className='border p-3 rounded-xl outline-none text-sm text-[#7a7d82]' type="text" placeholder='Type your text here...' value={task} onChange={handleTaskChange} />

        <p className='font-bold text-[#595a5d]'>Priority</p>
        <div className='flex gap-7'>
          <div 
            onClick={()=>{
              setHighState(true);
              setMediumState(false);
              setLowState(false)
            }} 

            className={`${highState ? "bg-[#f73446] text-white": ""} text-center hover:cursor-pointer border  border-[#f73446] text-[#f73446] w-[100px] rounded-lg py-1`}>High</div>

          <div 
            onClick={()=>{
              setMediumState(true);
              setLowState(false)
              setHighState(false);
            }} 
 

            className={`${mediumState ? "bg-[#ffbd21] text-white": ""} text-center hover:cursor-pointer border border-[#ffbd21] text-[#ffbd21] w-[100px] rounded-lg py-1`}>Medium</div>

          <div 
            onClick={()=>{
              setLowState(true)
              setMediumState(false);
              setHighState(false);
            }} 


            className={`${lowState ? "bg-[#0ec10e] text-[white] "  : ""} text-center hover:cursor-pointer  border border-[#0ec10e]  text-[#0ec10e] w-[100px] rounded-lg py-1`}>Low</div>
        </div>

        <div className='flex justify-end'>
          <button  className='bg-[#7d8592] p-2 w-[90px] text-white font-bold rounded-xl'>Add</button>
        </div>
      </form>

    
    </div>
    {/* {toastState && <Toaster/>} */}
    
    <Toaster/>
    </div>
  )
}

export default AddTask