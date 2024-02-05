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
    <div className="bg-white md:w-[75vw] w-[100vw] md:mx-auto flex md:justify-around justify-between py-3 font-bold  text-black opacity-60 min-h-[4.1em] ">
        <p className='flex justify-center items-center gap-1 border w-[50%]'>Average Reading Time: 
            <span >
            {longestWord ? `~${averageReadTime} minute`:  <AiOutlineMinus/>}
            </span>
        </p>

        <p className='flex  justify-center items-center gap-1 w-[50%]'>Longest word: 
            <span className='w-[70%] overflow-x-auto scrollbar-thin scrollbar-webkit' >
                {longestWord? longestWord:  <AiOutlineMinus/>}
            </span>
        </p>
    </div>
  )
}

export default BottomResults