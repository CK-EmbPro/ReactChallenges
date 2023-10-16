import React from 'react'

const Checkbox = () => {
  return (
    <div>
        <p></p>
        <input type="range" />

        <div>
            <label htmlFor="uppercase">
                <input type="checkbox" id='uppercase' />
            </label>

            <label htmlFor="lowercase">
                <input type="checkbox" id='lowercase' />
            </label>

            <label htmlFor="numbers">
                <input type="checkbox" id='numbers' />
            </label>

            <label htmlFor="specialChars">
                <input type="checkbox" id='specialChars' />
            </label>
        </div>
    </div>
  )
}

export default Checkbox