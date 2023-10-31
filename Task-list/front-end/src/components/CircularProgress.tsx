import { Circle, Line } from 'rc-progress'
import React, { useState } from 'react'

const CircularProgress = () => {
    const [percentage, setpercentage] = useState<number>(0)
  return (
    <>
    <div className=' h-[30px] w-[30px]'>
        <Circle 
        percent={percentage}
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