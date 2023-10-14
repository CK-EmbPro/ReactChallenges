import { useState } from 'react'
import './App.css'
import BottomResults from './components/BottomResults'
import Chat from './components/Chat'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'



function App() {

  const [words, setWords] = useState<number>(0)
  const [characters, setCharacters] = useState<number>(0)
  const [sentences, setSentences] = useState<number>(0)
  const [paragraphs, setParagraphs] = useState<number>(0)
  const [pronouns, setPronouns] = useState<number>(0)

  return (
    <div className='bg-gray-100 min-h-screen flex flex-col '>
      <Navbar/>
      <ResultBox
       words={words} 
       setWords={setWords}
       sentence={sentences} 
       setSentence= {setSentences}
       paragraphs= {paragraphs}
       setParagraphs={setParagraphs}
       characters={characters} 
       setCharacters= {setCharacters}
       pronouns= {pronouns}
       setPronouns={setPronouns}
       />
       

      <TextArea
      words={words} 
      setWords={setWords}
      sentence={sentences} 
      setSentence= {setSentences}
      paragraphs= {paragraphs}
      setParagraphs={setParagraphs}
      characters={characters} 
      setCharacters= {setCharacters}
      pronouns={pronouns}
      setPronouns= {setPronouns}
      />
      <BottomResults/>
      <Footer/>
    </div>
  )
} 

export default App
