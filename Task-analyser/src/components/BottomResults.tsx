import React from 'react'
import {AiOutlineMinus} from 'react-icons/ai'


interface BottomResultsProps{
    longestWord: string,
    setLongestWord: React.Dispatch<React.SetStateAction<string>>,
    averageReadTime: number,
    setAverageReadTime: React.Dispatch<React.SetStateAction<number>>
}

const BottomResults = ({longestWord, setLongestWord, averageReadTime, setAverageReadTime}: BottomResultsProps) => {
    
  return (
    <div className="bg-white w-[75vw] mx-auto flex justify-around py-3 font-bold  text-black opacity-60 ">
        <p className='flex items-center gap-1 '>Average Reading Time: 
            <span >
                <AiOutlineMinus/>
            </span>
        </p>

        <p className='flex items-center gap-1 '>Longest word: 
            <span >
                {longestWord? longestWord:  <AiOutlineMinus/>}
            </span>
        </p>
    </div>
  )
}

export default BottomResults