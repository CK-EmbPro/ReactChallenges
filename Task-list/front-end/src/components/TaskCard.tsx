import React, { FormEvent, SetStateAction, useEffect, useState } from 'react'
import CircularProgress from './CircularProgress'
import Edit from '../assets/icons/edit.svg'
import Delete from '../assets/icons/delete.svg'
import { ObjectId } from 'mongodb'

interface TaskCardProps{
  setOpenEditTaskModal: React.Dispatch<SetStateAction<boolean>>
  setOpenDeleteTaskModal: React.Dispatch<SetStateAction<boolean>>
  setEditId: React.Dispatch<SetStateAction<string>>
  setDeleteId: React.Dispatch<SetStateAction<string>>
  handleSubmit: (e:FormEvent<HTMLFormElement>)=>void
  task: string
  priority: string
  highState: boolean
  mediumState:boolean
  lowState:boolean
}

interface Todo{
  task: string,
  priority: string
  _id: ObjectId
  progressPercent: number
}

const TaskCard = ({setOpenEditTaskModal,setEditId,setDeleteId, setOpenDeleteTaskModal, task, priority, highState,mediumState, lowState, handleSubmit}: TaskCardProps) => {
  
  const [done, setDone] = useState<boolean>(false)
  const [inProgress, setInProgress] = useState<boolean>(false)
  const [toDo, setTodo] = useState<boolean>(true)
  const [progressPercent, setProgressPercent] = useState<number>(0)
  const [todoArray, setTodoArray] = useState<Todo[]>([])

  const baseUrl = "https://task-list-backend-service.onrender.com"

  const getAllTodos = async()=>{
    let todosRes = await fetch(`${baseUrl}/getTodos`,{
      method: "GET"
    })

    let allTodos = await todosRes.json()
    let allTodosWithProgress = allTodos.map((todo:Todo) =>({
      ...todo,
      progressPercent: progressPercent,
    }))

    setTodoArray(allTodosWithProgress)
  }
  useEffect(() =>{
    getAllTodos()
  },[handleSubmit])
 


const handleBtnsProgress = (todoId: string): void => {
 
  setTodoArray((prevTodos) =>
    prevTodos.map((todo) => {
      
      if (todo._id.toString() === todoId) {
        
        if (todo.progressPercent === 0) {
          return { ...todo, progressPercent: 50 };
        } else if (todo.progressPercent === 50) {
          return { ...todo, progressPercent: 100 };
        } else {
          return { ...todo, progressPercent: 0 };
        }
      } 
      return todo; 
    }) 
  );  
}; 



 
  return (
    <div>
    {todoArray.map(todo=>{
      
      
      return (
           
        <div className='flex items-center justify-between bg-white  max-h-[140px] h-[90px] my-10  rounded-3xl px-10'>
        <div className=' md:w-[20%] w-[30%]'>
          <p className='text-[#94989e] md:text-[1.2em] text-[3vw]'>Task</p>
          <p className='md:text-[1.2em] text-[3vw]'>{todo.task}</p>
        </div>
  
        <div className=' w-[20%] md:block flex flex-col md:leading[1em] leading-[2.6vw] justify-center md:pt-1 pt-3'>
          <p className='text-[#7d8592] md:text-[1.2em]  text-[3vw]'>Priority</p>
          <p className={`font-bold text-lg md:text-[1.2em] text-[3vw] ${todo.priority==="high" ? "text-[#f73446]": ""} ${todo.priority==="medium" ? "text-[#ffbd21]" :""} ${todo.priority==="low" ? "text-[#0ec10e]":""} `}>{todo.priority}</p>
        </div>
  
        <div className='relative w-[150px] h-[50px] ' onClick={()=>handleBtnsProgress(todo._id.toString())}>
          <button className={`bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] md:text-[1em] text-[2.5vw] rounded-lg absolute  ${todo.progressPercent===0 ? "" : "hidden"} top-2 left-7`}>
            To Do
          </button>
          
          <button className={`bg-[#cbcccd] text-[#4c4c4c] md:px-2 px-[1vw] py-[4px]  md:text-[1em] md:w-[7em] text-[2.5vw] rounded-lg absolute ${todo.progressPercent===50 ? "" : "hidden"} left-2 top-2`}>
            In progress
          </button>
  
          <button className={`bg-[#cbcccd] text-[#4c4c4c] px-3 py-[4px] md:text-[1em] text-[2.5vw] rounded-lg absolute  ${todo.progressPercent===100 ? "" : "hidden"}  left-7 top-2`}>
            Done
          </button>
        </div>
        
  
        <CircularProgress progressPercent = {todo.progressPercent} />
  
        <div className='flex gap-6 md:ms-[20px]'>
          <img onClick={()=>{
            setOpenEditTaskModal(true)  
            setEditId(todo._id.toString())
            
            }}  className='hover:cursor-pointer md:w-[1.7em] w-[3.5vw]' src={Edit}/>
          <img onClick={()=> {
            setOpenDeleteTaskModal(true)
            setDeleteId(todo._id.toString())
          }} className='hover:cursor-pointer md:w-[1.7em] w-[3.5vw]' src={Delete}/>
        </div>
        </div>
       
      )
    })}
</div>
   
   
  )
}

export default TaskCard