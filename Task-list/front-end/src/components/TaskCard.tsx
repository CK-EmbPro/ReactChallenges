import React, { FormEvent, SetStateAction, useEffect, useState } from 'react'
import CircularProgress from './CircularProgress'
import Edit from '../assets/icons/edit.svg'
import Delete from '../assets/icons/delete.svg'
import { ObjectId } from 'mongodb'

interface TaskCardProps{
  setOpenEditTaskModal: React.Dispatch<SetStateAction<boolean>>
  setOpenDeleteTaskModal: React.Dispatch<SetStateAction<boolean>>
  setEditId: React.Dispatch<SetStateAction<string>>
  task: string
  priority: string
  handleSubmit: (e:FormEvent<HTMLFormElement>)=>void
}

interface Todo{
  task: string,
  priority: string
  _id: ObjectId
}

const TaskCard = ({setOpenEditTaskModal,setEditId, setOpenDeleteTaskModal, task, priority,handleSubmit}: TaskCardProps) => {
  
  const [done, setDone] = useState<boolean>(false)
  const [inProgress, setInProgress] = useState<boolean>(false)
  const [toDo, setTodo] = useState<boolean>(true)
  const [progressPercent, setProgressPercent] = useState<number>(0)
  const [todoArray, setTodoArray] = useState<Todo[]>([])

  const baseUrl = "http://localhost:8000"

  const getAllTodos = async()=>{
    let todosRes = await fetch(`${baseUrl}/getTodos`,{
      method: "GET"
    })

    let allTodos = await todosRes.json()
    console.log("All todos :",allTodos)

    setTodoArray(allTodos)
  }
  useEffect(() =>{
    getAllTodos()
  },[handleSubmit])
 
 const handleBtnsProgress = ():void=>{
  if(toDo){
    setInProgress(true)
    setTodo(false)
    setDone(false)
    setProgressPercent(50)
  }
  if(inProgress) {
    setDone(true)
    setInProgress(false)
    setTodo(false)
    setProgressPercent(100)
  }if(done){
    setTodo(true)
    setDone(false)
    setInProgress(false)
    setProgressPercent(0)
  }
 }

 console.log("My todoArray", todoArray)

 
  return (
    <div>
    {todoArray.map(todo=>{
      
      
      return (
           
        <div className='flex items-center justify-between bg-white  max-h-[140px] h-[90px] my-10 rounded-3xl px-10'>
        <div className=''>
          <p className='text-[#94989e]'>Task</p>
          <p>{todo.task}</p>
        </div>
  
        <div>
          <p className='text-[#7d8592]'>Priority</p>
          <p className='font-bold text-lg text-[#f73446]'>{todo.priority}</p>
        </div>
  
        <div className='relative w-[130px] h-[50px]' onClick={handleBtnsProgress}>
          <button className={`bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] rounded-lg absolute  ${!toDo ? "hidden" : ""} top-2 left-7`}>
            To Do
          </button>
          
          <button className={`bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] rounded-lg absolute ${!inProgress ? "hidden" : ""} left-2 top-2`}>
            In progress
          </button>
  
          <button className={`bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] rounded-lg absolute  ${!done ? "hidden" : ""}  left-7 top-2`}>
            Done
          </button>
        </div>
        
  
        <CircularProgress progressPercent ={progressPercent} />
  
        <div className='flex gap-6'>
          <img onClick={()=>{
            setOpenEditTaskModal(true)  
            setEditId(todo._id.toString())
            
            }}  className='hover:cursor-pointer' src={Edit}/>
          <img onClick={()=> setOpenDeleteTaskModal(true)} className='hover:cursor-pointer' src={Delete}/>
        </div>
        </div>
       
      )
    
      
    })}
</div>
   
   
  )
}

export default TaskCard