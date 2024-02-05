import React from 'react'
import {HiOutlineMinus} from 'react-icons/hi'

const Footer = () => {
  return (
    <div className='border bg-blue-50 flex justify-between px-10 py-4 font-bold text-lg'>
        <p>Build by CK Debrice</p>
        <div className='flex items-center'>
            <p>About Us</p>
            <HiOutlineMinus className='rotate-90'/>
            <p>Contact Us</p>
        </div>
    </div>
  )
}

export default Footer