import React from 'react'
import Website from '../../assets/icons/website.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import Twitter from '../../assets/icons/twitter.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-blue-50 flex justify-between px-10 py-4  drop-shadow-md'>
        <h1 className='font-bold text-lg font-display'>Text Analyzer</h1>
        <div className='flex justify-between w-[20%] items-center '>
          <a target="_blank" href='https://fonts.google.com/specimen/Poppins' className='w-[16%]'><img className='w-full' src={Website} /></a>
          <a target="_blank" href='https://twitter.com/' className='w-[16%]'><img className='w-full' src={Twitter} /></a>
          <a target="_blank" href='https://www.linkedin.com/feed/' className='w-[16%]'><img className='w-full' src={LinkedIn} /></a>
        </div>
    </div>
  )
}

export default Navbar