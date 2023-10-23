import React from 'react'
import Quotation from './assets/icons/quotation.svg'
import ToRightBtn from './assets/icons/button.svg'
import ToLeftBtn from './assets/icons/button.svg'
import Twitter from './assets/icons/twitter.svg'
import Whatsapp from './assets/icons/whatsapp.svg'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between bg-[#f0faf9]  '>
      <nav className='w-full bg-[#ff7d1f] h-[35px]'>
      </nav>

      <main className='w-[65%] h-[auto] flex flex-col justify-between mx-auto gap-7'>
        <img className='w-[10%] h-[30%]' src={Quotation} alt="" />
        <p className='text-[#46474e] text-[35px] leading-[50px] font-[Poppins]'>Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</p>
        <p className='text-[#46474e] text-[35px] leading-[50px] font-[Poppins]'>- Albert Schweitzer</p>


        <div className='flex justify-between'>
          <span className='flex w-[20%] justify-between'>

            <button>
              <img className='rotate-180' src={ToRightBtn}/>
            </button>

            <button>
              <img  src={ToRightBtn}/>
            </button>
          </span>

          <span className='flex w-[25%] justify-between items-center'>
            <p className='text-[20px] font-[Poppins]'> share at:</p> 
              <button>
                <img src={Twitter} />
              </button>

              <button>
                <img src={Whatsapp} />
              </button>
          </span>
        </div>
      </main>

      <footer className='w-full bg-[#ff7d1f] h-[35px]' ></footer>
    </div>
  )
}

export default App