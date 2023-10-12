import React from 'react'

const ResultBox = () => {
  return (
    <div className='bg-white flex gap-20 ps-8 py-3 w-[75vw] mt-20  mx-auto mb-5 '>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Words <span>0</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Characters <span>0</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Sentences <span>0</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Paragraphs <span>0</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Pronouns <span>0</span></p>
    </div>
  )
}

export default ResultBox