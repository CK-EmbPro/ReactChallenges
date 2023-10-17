import React, {useState} from 'react'
import PasswdGif from '../assets/gif/password.gif'
import RefreshIcon from '../assets/icons/refresh.svg'
import CopyIcon from '../assets/icons/copy.svg'

const PasswdGen = () => {
  
  return (
    <div className='border-t-2xl flex flex-col items-center gap-3 pt-4'>
        <img className='w-[20%]' src={PasswdGif} />
        <h1 className='font-bold text-2xl'>PASSWORD GENERATOR</h1>
        <p className='text-[17px]'>Create a strong and secure passwords to keep your account safe online.</p>

        <div className= 'flex flex-col w-[80%]' >
          <div className='flex  w-full justify-around items-center'>
            <div className='border border-black  relative w-[76%] px-3 py-[7px] font-bold rounded-[13px]'>
              <input type="text" placeholder='your password' className='outline-none w-[86%]' />
              <button className=' absolute top-[3px] h-[80%] left-[333px]'>
                <img src={RefreshIcon} alt="" />
              </button>
            </div>

            <button className='flex gap-2 bg-[#33cccc] rounded-[12px] font-bold justify-center border h-full px-3 items-center'>
              <img className='w-[14px]' src={CopyIcon} alt="" />
              Copy
            </button>
          </div>

          <p className='font-bold text-[#dc3545]'>Too short</p>
        </div>


    </div>
  )
}

export default PasswdGen