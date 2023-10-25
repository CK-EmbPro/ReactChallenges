import React, { useEffect, useState } from 'react'
import Quotation from './assets/icons/quotation.svg'
import ToRightBtn from './assets/icons/button.svg'
import ToLeftBtn from './assets/icons/button.svg'
import Twitter from './assets/icons/twitter.svg'
import Whatsapp from './assets/icons/whatsapp.svg'
import axios from 'axios'
import { fetchQuotes } from './utils'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const App =  () => {

  const [quoteList, setquoteList] = useState<Array<{quote: string, author: string}>>([])
  let [index, setIndex]  = useState<number>(0)
  const [rightDisabledState, setRightDisabledState] = useState<boolean>(false)
  const [leftDisabledState, setLeftDisabledState] = useState<boolean>(false)
  const [isCopied, setisCopied] = useState(false)
  
  useEffect( () => {
    const setQoutes= async():Promise<void>=>{
      const randomArray = await fetchQuotes();
      setquoteList(randomArray)
    }
    
    setQoutes()

   
  }, [])
  




  console.log("Quote list",quoteList)

  
  const [quoteToDisplay, setQuoteToDisplay] = useState<{quote: string, author: string}>({
    quote: "",
    author: "",
  })

  useEffect( () => {

    if(quoteList.length >0){
      setQuoteToDisplay(quoteList[index])
    }
    
  }, [quoteList, index])
  
  const toNextQuote= ():void => {
    if(index === quoteList.length-1){
      setRightDisabledState(true);
    }

    if (index < quoteList.length - 1) {
      setIndex(index + 1);

      setLeftDisabledState(false)
    }
    
  }
  
  const toPrevQuote= ():void=>{
    if(index===1){
      setLeftDisabledState(true);
    }

   if (index > 0) {
      setIndex(index - 1);
      setRightDisabledState(false)
    }
    
  }

 
   console.log("the index is ", index)
  
  return (

    <div className='flex flex-col min-h-screen justify-between bg-[#f0faf9]  '>
      <nav className='w-full bg-[#ff7d1f] h-[35px]'>
      </nav>

      {
        quoteList[0]?(
      <main className='w-[65%] h-[auto] flex flex-col justify-between mx-auto gap-7'>
        <img className='w-[10%] h-[30%]' src={Quotation} alt="" />
       
              <p className='text-[#46474e] text-[35px] leading-[50px] font-[Poppins]'>{quoteToDisplay.quote}</p>
              <p className='text-[#46474e] text-[35px] leading-[50px] font-[Poppins]'>{quoteToDisplay.author}</p>
            

        <div className='flex justify-between'>
          <span className='flex w-[20%] justify-between'>

            <button disabled={leftDisabledState} onClick={toPrevQuote}>
              <i className={`fa-solid fa-angle-right rotate-180 ${leftDisabledState? "text-slate-400": "text-black border-2 border-black w-[30px] h-[30px] flex items-center justify-center p-8 text-3xl rounded-[100px]"}`}></i>
            </button>

            <button disabled={rightDisabledState} onClick={toNextQuote}>
              <i className={`fa-solid fa-angle-right ${rightDisabledState ? "text-slate-400": "text-black border-2 border-black w-[30px] h-[30px] flex items-center justify-center p-8 text-3xl rounded-[100px]"} `}></i>
            </button>
          </span>

          <span className='flex w-[25%] justify-between items-center'>
            <p className='text-[20px] font-[Poppins]'> share at:</p> 
              
              <button>
                <a target="_blank" href={`https://twitter.com/intent/tweet?text=${quoteToDisplay.quote}`}>
                <img src={Twitter} />
                </a>
              </button>
              
              <button >
                <a target="_blank" href={`https://api.whatsapp.com/send/?text=${quoteToDisplay.quote}`}>
                <img src={Whatsapp} />
                </a>
              </button>
          </span>
        </div>
      </main>

        ): <p className='flex justify-center items-center text-[20px] font-[Poppins] text-[#46474e] font-bold'>Loading...</p>
      }

      <footer className='w-full bg-[#ff7d1f] h-[35px]' ></footer>
    </div>
  )
}

export default App