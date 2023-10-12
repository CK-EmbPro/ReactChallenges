import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai'

const BottomResults = () => {
  return (
    <div className="bg-white w-[75vw] mx-auto flex justify-around py-3 font-bold  text-black opacity-60 ">
        <p className='flex items-center gap-1 '>Average Reading Time: 
            <span >
                <AiOutlineMinus/>
            </span>
        </p>

        <p className='flex items-center gap-1 '>Longest word: 
            <span >
                <AiOutlineMinus/>
            </span>
        </p>
    </div>
  )
}

export default BottomResults