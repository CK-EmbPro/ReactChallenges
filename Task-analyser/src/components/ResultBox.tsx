import React, { useState } from 'react'
import { pronounsArray } from '../data/pronounsArray'

interface ResultsBoxProps{
  words: number,
  setWords: React.Dispatch<React.SetStateAction<number>>
  sentence: number, 
  setSentence: React.Dispatch<React.SetStateAction<number>>
  paragraphs: number,
  setParagraphs: React.Dispatch<React.SetStateAction<number>>
  characters: number,
  setCharacters: React.Dispatch<React.SetStateAction<number>>,
  pronouns: number,
  setPronouns: React.Dispatch<React.SetStateAction<number>>
}

const ResultBox = ({words, sentence, paragraphs, characters, pronouns}:ResultsBoxProps) => {


  return (
    <div className='bg-white flex md:justify-between gap-[6vw] md:px-12 px-2  py-3 md:w-[75%] w-[100%] border border-red-500 mt-20  mx-auto mb-5 '>
        <p className='flex flex-col items-center text-black opacity-50 font-bold md:text-[1.3em] text-[3vw] '>Words <span>{words}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold md:text-[1.3em] text-[3vw] '>Characters <span>{characters}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold md:text-[1.3em] text-[3vw] '>Sentences <span>{sentence}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold md:text-[1.3em] text-[3vw] '>Paragraphs <span>{paragraphs}</span></p>
        <p className='flex flex-col items-center text-black opacity-50 font-bold md:text-[1.3em] text-[3vw] '>Pronouns <span>{pronouns}</span></p>
    </div>
  )
}

export default ResultBox