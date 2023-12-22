import React, { useState } from 'react'
import './App.css'
import Checkbox from './components/Checkbox'
import PasswdGen from './components/PasswdGen'

function App() {

    const [rangeValue, setRangeValue] = useState(5)
    const [isLowercase, setisLowercase] = useState<boolean>(true)
    const [isUppercase, setisUppercase] = useState<boolean>(false)
    const [isNumbers, setisNumbers] = useState<boolean>(false)
    const [isSpecialChars, setisSpecialChars] = useState<boolean>(false)

  return (
   <div className='bg-[#319795] py-8 min-h-screen'>
    <div className='gap-5 h-[650px] flex flex-col bg-white w-[48vw] m-auto rounded-3xl'>
    <PasswdGen
    rangeValue = {rangeValue}
    setRangeValue={setRangeValue} 
    isLowercase = {isLowercase} 
    setisLowercase={setisLowercase} 
    isUppercase={isUppercase} 
    setisUppercase = {setisUppercase} 
    isNumbers= {isNumbers} 
    setisNumbers={setisNumbers}   
    isSpecialChars = {isSpecialChars} 
    setisSpecialChars= {setisSpecialChars}
    />
    <Checkbox 
      rangeValue = {rangeValue}
     setRangeValue={setRangeValue} 
     isLowercase = {isLowercase} 
     setisLowercase={setisLowercase} 
     isUppercase={isUppercase} 
     setisUppercase = {setisUppercase} 
     isNumbers= {isNumbers} 
     setisNumbers={setisNumbers}   
     isSpecialChars = {isSpecialChars} 
     setisSpecialChars= {setisSpecialChars}
     />
    
    </div>
   </div>
  )
}

export default App