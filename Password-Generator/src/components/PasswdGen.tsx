import React, {ChangeEvent, useEffect, useState} from 'react'
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

  const [passwordString, setpasswordString] = useState("")
  const [randomStringState, setrandomString] = useState("")
  

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
    }

    useEffect(() => {
      generateRandomString(rangeValue);
    },[rangeValue]);
      
      const handleRandomPwordChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setpasswordString(e.target.value)
      }

      console.log("uppercase", isUppercase)
      console.log("numbers", isNumbers)
    
  
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

            <button className='flex gap-2 bg-[#33cccc] rounded-[12px] font-bold justify-center border h-full px-3 items-center'>
              <img className='w-[14px]' src={CopyIcon} alt="" />
              Copy
            </button>
          </div>

          <p className={`font-bold 
            ${randomStringState.length<8 ? "text-[#dc3545]" :""} 
            
            `}>
            {randomStringState.length <8 ? "Too short" : ""}
            {/* {randomString} */}
          </p>
        </div>


    </div>
  )
}

export default PasswdGen