import { ObjectId } from 'mongodb'
import toast, {Toaster} from 'react-hot-toast'
import React, { ChangeEvent, FormEvent, SetStateAction, useEffect, useState } from 'react'
import {TiTimes} from 'react-icons/ti'

interface EditTaskProps{
  closeEditTaskModal: React.Dispatch<SetStateAction<boolean>>
  editId: string
}

interface Todo{
  task: string,
  priority: string,
 
}

const EditTask = ({closeEditTaskModal, editId}: EditTaskProps) => {
  const [highState, setHighState] = useState<boolean>(false)
  const [mediumState, setMediumState] = useState<boolean>(false)
  const [lowState, setLowState] = useState<boolean>(false)
  const [todoToBeUpdated, setTodoToBeUpdated] = useState<Todo>({
    priority:'',
    task: '',
  })
  const [toastState, setToastState] = useState<boolean >(false)

  const baseUrl = "http://localhost:8000"


  const handleUpdateSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    let submit = await fetch(`${baseUrl}/editTodo/${editId}`, {
      method: "PUT",
      body: JSON.stringify({
        task: todoToBeUpdated.task,
        priority: todoToBeUpdated.priority
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if(submit.ok) {
      setToastState(true); 
     
      
      
      toast.success("Successfully update");
  
      setTimeout(() => {
       
        closeEditTaskModal(false);
        
       
        setToastState(false);
       
      }, 2000);
    }
  }



  const setPriorityBoolean = ()=>{
    if(todoToBeUpdated.priority==="low"){
      setLowState(true)
    }
    if(todoToBeUpdated.priority==="medium"){
      setMediumState(true)
    }
    if(todoToBeUpdated.priority==="high"){
      setHighState(true)
    }
  }
  useEffect(() => {
    setPriorityBoolean();
  }, [todoToBeUpdated.priority])
  
  
  const handlePriorityChange = ()=>{
    if(lowState){
      setTodoToBeUpdated({
        ...todoToBeUpdated,
        priority: "low"
      })
    }
    if(mediumState){
      setTodoToBeUpdated({
        ...todoToBeUpdated,
        priority: "medium"
      })
    }
    if(highState){
      setTodoToBeUpdated({
        ...todoToBeUpdated,
        priority: "high"
      })
    }
  }

  useEffect(()=>{
    handlePriorityChange()
  }, [lowState, mediumState, highState])
  

  const handletodoToBeUpdatedChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setTodoToBeUpdated({
      ...todoToBeUpdated,
      task: e.target.value
    })
  }

  const fetchTodo = async()=>{
    let response = await fetch(`${baseUrl}/getTodoById/${editId}`)
    let todo= await response.json()

    setTodoToBeUpdated(todo)
  }

  useEffect(() => {
   fetchTodo()
  }, [editId])


  
  return (
  

    <div className='w-[100vw] h-[100vh] fixed top-0 left-0'>

    
    <div className=' w-[100vw] h-[100vh] absolute top-0 left-0 flex justify-center items-center bg-[#443d3d] opacity-[.6]'></div>
    <div className='absolute left-[30vw] top-[33vh] bg-white w-[40vw] h-[350px] p-10 font-[Poppins] rounded-3xl flex flex-col gap-6 border border-green-400'>
      <div className=' flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Edit Task</h1>
        <TiTimes onClick={()=> closeEditTaskModal(false)} className='text-2xl hover:cursor-pointer'/>
      </div>

      <form onSubmit={handleUpdateSubmit} className='flex flex-col gap-4'>
        <label htmlFor="taskInput" className='font-bold text-[#595a5d]'>
          Task
        </label>

        <input className='p-3 rounded-xl outline-none  text-sm text-[#7a7d82]' type="text" placeholder='Type your text here...' value={todoToBeUpdated.task} onChange={handletodoToBeUpdatedChange} />

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
        <button  className='bg-[#713fff]  p-2 w-[90px] text-white font-bold rounded-xl'>Edit</button>
        </div>
      </form>

    
    </div>
    
    </div>
  )
}

export default EditTask