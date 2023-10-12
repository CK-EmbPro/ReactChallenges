import React from 'react'
import Website from '../../assets/icons/website.svg'
import LinkedIn from '../../assets/icons/linkedin.svg'
import Twitter from '../../assets/icons/twitter.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border bg-blue-50 flex justify-between px-10 py-4  drop-shadow-md'>
        <h1 className='font-bold text-lg font-display'>Text Analyzer</h1>
        <div className='flex w-1/12 justify-between items-center gap-5'>
          <a target="_blank" href='https://fonts.google.com/specimen/Poppins'><img className='h-1/2' src={Website} /></a>
          <a target="_blank" href='https://twitter.com/'><img className='h-1/3' src={Twitter} /></a>
          <a target="_blank" href='https://www.linkedin.com/feed/'><img className='h-1/3' src={LinkedIn} /></a>
        </div>
    </div>
  )
}

export default Navbar