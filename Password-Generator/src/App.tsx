import React from 'react'
import './App.css'
import Checkbox from './components/Checkbox'
import PasswdGen from './components/PasswdGen'

function App() {

  return (
   <div className='bg-[#319795] py-8 min-h-screen'>
    <div className='gap-5 h-[650px] flex flex-col bg-white w-[48vw] m-auto rounded-3xl'>
    <PasswdGen />
    <Checkbox />
    </div>
   </div>
  )
}

export default App