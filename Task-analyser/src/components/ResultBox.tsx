import React, { useState } from 'react'

interface ResultsBoxProps{
  words: number,
  setWords: React.Dispatch<React.SetStateAction<number>>
  sentence: number, 
  setSentence: React.Dispatch<React.SetStateAction<number>>
  paragraphs: number,
  setParagraphs: React.Dispatch<React.SetStateAction<number>>
  characters: number,
  setCharacters: React.Dispatch<React.SetStateAction<number>>
}

const ResultBox = ({words, sentence, paragraphs, characters}:ResultsBoxProps) => {


  return (
    <div className='bg-white flex gap-20 ps-8 py-3 w-[75vw] mt-20  mx-auto mb-5 '>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Words <span>{words}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Characters <span>{characters}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Sentences <span>{sentence}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Paragraphs <span>{paragraphs}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold'>Pronouns <span>0</span></p>
    </div>
  )
}

export default ResultBox