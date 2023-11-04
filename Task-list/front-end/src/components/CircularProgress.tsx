import { Circle, Line } from 'rc-progress'
import React, { useState } from 'react'

interface CircularProgressProps {
  progressPercent: number;
}

const CircularProgress = ({progressPercent}:CircularProgressProps) => {
    
  return (
    <>
    <div className=' h-[30px] w-[30px]'>
        <Circle 
        percent={progressPercent}
        strokeColor="blue" //the covering line
        strokeWidth={9}
        trailColor="#d9d9d9" //the covered line
        trailWidth={9}
        strokeLinecap="square"  
            
        />
    </div>

   
    </>
  )
}

export default CircularProgress