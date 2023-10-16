import React from 'react'
import PasswdGif from '../assets/gif/password.gif'
import RefreshIcon from '../assets/icons/refresh.svg'

const PasswdGen = () => {
  return (
    <div>
        <img src={PasswdGif} />
        <h1>PASSWORD GENERATOR</h1>
        <p>Cretae a strong and secure passwords to keep your account safe online.</p>

        <div>
        <div>
            <input type="text" />
            <img src={RefreshIcon} />
        </div>

        <p className='' >Too short</p>

        </div>


    </div>
  )
}

export default PasswdGen