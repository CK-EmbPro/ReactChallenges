import React, { ChangeEvent, useState } from 'react'

const Checkbox = () => {
    const [rangeValue, setRangeValue] = useState<number>(5)

    const handleRangeValueChange = (e: ChangeEvent<HTMLInputElement>)=>{
        let parsedValue = parseInt(e.target.value, 10)
        setRangeValue(parsedValue);
    }
  return (
    <div className='w-[80%] mx-auto flex flex-col gap-6'>
        <p>Password Length: 
            <span>
                {rangeValue}
            </span>
        </p>
        <input type="range" className='w-full accent-[#33cccc] bg-transparent text-white ' min={5} max={30} step={1} value={rangeValue} onChange={handleRangeValueChange} />

        <div className='flex flex-col gap-5'>

            <div className='flex justify-between'>
                <label className='flex gap-9' htmlFor="uppercase">
                    Uppercase
                </label>
                <input type="checkbox" id='uppercase' />
            </div>

            <div className='flex justify-between'>
                <label className='flex gap-9' htmlFor="lowercase">
                    Lowercase
                </label>
                <input type="checkbox" id='lowercase' />
            </div>

            <div className='flex justify-between'>
                <label className='flex gap-9 ' htmlFor="numbers">
                    Numbers
                </label>
                <input type="checkbox" id='numbers' />
            </div>

            <div className='flex justify-between'>
                <label className='flex gap-9 ' htmlFor="specialChars">
                    Special Characters
                </label>

                <input type="checkbox" id='specialChars' />
            </div>

        </div>
    </div>
  )
}

export default Checkbox