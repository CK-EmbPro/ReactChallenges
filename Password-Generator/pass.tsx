
import React, {ChangeEvent, useEffect, useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import PasswdGif from '../assets/gif/password.gif'
import RefreshIcon from '../assets/icons/refresh.svg'
import CopyIcon from '../assets/icons/copy.svg'

interface PasswdGenProps {
  rangeValue: number;
  setRangeValue: React.Dispatch<React.SetStateAction<number>>
  isLowercase: boolean;
  setisLowercase: React.Dispatch<React.SetStateAction<boolean>>;
  isUppercase: boolean;
  setisUppercase: React.Dispatch<React.SetStateAction<boolean>>;
  isNumbers: boolean;
  setisNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  isSpecialChars: boolean;
  setisSpecialChars: React.Dispatch<React.SetStateAction<boolean>>;
}

const PasswdGen = ({rangeValue, setRangeValue, isLowercase, setisLowercase, isUppercase, setisUppercase, isNumbers, setisNumbers,isSpecialChars, setisSpecialChars}: PasswdGenProps) => {

  const [passwordString, setpasswordString] = useState<string>("")
  const [randomStringState, setrandomString] = useState<string>("")
  const [passwordStrength, setpasswordStrength] = useState<string>("")
  const [isCopied, setisCopied] = useState<boolean>(false)
  

  const  generateRandomString = (passwordLen:number) : void=> {
    const uppercase:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase:string = "abcdefghijklmnopqrstuvwxyz"
    const numbers:string = "0123456789"
    const specialChars:string = "!@#$%^&*()_-+=<>?"
    
    let randomStringWord = ""
      let allchars = '';

      if (isUppercase) {
        allchars += uppercase;
      }
      if (isLowercase) {
        allchars += lowercase;
      }
      if (isNumbers) {
        allchars += numbers;
      }
      if (isSpecialChars) {
        allchars += specialChars;
      }
    
      for (let i = 0; i < passwordLen; i++) {
        let randomIndex = Math.floor(Math.random() * allchars.length);
        randomStringWord += allchars.charAt(randomIndex);
      }

      setpasswordString(randomStringWord)
      setrandomString(randomStringWord)

      const hasUppercase = /[A-Z]/.test(randomStringWord);
    const hasLowercase = /[a-z]/.test(randomStringWord);
    const hasNumber = /\d/.test(randomStringWord);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(randomStringWord);

    if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
      setpasswordStrength("Hard");
    } else if (
      (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) ||
      (hasUppercase && hasLowercase && hasNumber) ||
      (hasUppercase && hasLowercase && hasSpecialChar) ||
      (hasUppercase && hasNumber && hasSpecialChar) ||
      (hasLowercase && hasNumber && hasSpecialChar)
    ) {
      setpasswordStrength("Medium");
    } else {
      setpasswordStrength("Easy");
    }
    
    
    
    }

    useEffect(() => {
      generateRandomString(rangeValue);
    },[rangeValue]);
      
      const handleRandomPwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setpasswordString(e.target.value)
      }

      
    

    const handleCopyToClipboard = (): void=>{
      setisCopied(true)

      setTimeout(()=>{
        setisCopied(false)
      }, 1000)
    }
  
  return (
    <div className='border-t-2xl flex flex-col items-center gap-3 pt-4'>
        <img className='w-[20%]' src={PasswdGif} />
        <h1 className='font-bold text-2xl'>PASSWORD GENERATOR</h1>
        <p className='text-[17px]'>Create a strong and secure passwords to keep your account safe online.</p>

        <div className= 'flex flex-col w-[80%]' >
          <div className='flex  w-full justify-around items-center'>
            <div className='border border-black  relative w-[76%] px-3 py-[7px] font-bold rounded-[13px]'>
              <input type="text" placeholder='your password' className='bg-transparent outline-none w-[86%]' value={passwordString} onChange={handleRandomPwordChange}  />
              <button className=' absolute top-[3px] h-[80%] left-[350px]' onClick={()=>generateRandomString(rangeValue)}>
                <img src={RefreshIcon}/>
              </button>
            </div>

            <CopyToClipboard text={passwordString} onCopy={handleCopyToClipboard}>
            <button className={`flex gap-2 bg-[#33cccc] rounded-[12px] font-bold justify-center border h-full px-3 items-center `}>
              <img className={`w-[14px] }`} src={CopyIcon} alt="" />
              {isCopied ? "Copied" : "Copy"}
            </button>
            </CopyToClipboard>
          </div>

          <p
          className={`font-bold ${passwordStrength === 'Easy' || randomStringState.length ==0 || (randomStringState.length < 8 && randomStringState.length !== 0) ? 'text-[#dc3545]' : ''} ${
            passwordStrength === 'Medium' && randomStringState.length > 8 ? 'text-[#FFA500]' : ''
          } ${passwordStrength === 'Hard' && randomStringState.length > 8 ? 'text-[#008000]' : ''}`}
        >
          
          {(randomStringState.length < 8 && randomStringState.length !== 0)? "Too short" : randomStringState.length ==0 ? "Please select some criteria" : passwordStrength === 'Easy' ? 'Easy' : passwordStrength === 'Medium' ? 'Medium' : passwordStrength === 'Hard' ? 'Hard' : ''}
        </p>
        </div>


    </div>
  )
}

export default PasswdGen