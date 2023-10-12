import './App.css'
import BottomResults from './components/BottomResults'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'


function App() {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col '>
      <Navbar/>
      <ResultBox/>
      <TextArea />
      <BottomResults/>
      <Footer/>
    </div>
  )
} 

export default App
