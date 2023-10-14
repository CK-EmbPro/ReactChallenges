import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import { pronounsArray } from '../data/pronounsArray';


interface TextAreaProps {
  words: number;
  setWords: React.Dispatch<React.SetStateAction<number>>;
  sentence: number;
  setSentence: React.Dispatch<React.SetStateAction<number>>;
  paragraphs: number;
  setParagraphs: React.Dispatch<React.SetStateAction<number>>;
  characters: number;
  setCharacters: React.Dispatch<React.SetStateAction<number>>;
  pronouns: number;
  setPronouns: React.Dispatch<React.SetStateAction<number>>,
  longestWord: string;
  setLongestWord: React.Dispatch<React.SetStateAction<string>>;
}
 
interface PronounsType{
  pronounsArray: string[];
}

const Chat = ({
  words,
  setWords,
  sentence,
  setSentence,
  paragraphs,
  setParagraphs,
  characters,
  setCharacters,
  pronouns,
  setPronouns, 
  longestWord,
  setLongestWord
}: TextAreaProps) => {

  let textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [textAreaValue, setTextAreaValue] = useState<string>('');
 
  const handleTextAreaInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setTextAreaValue(newText);


    


    
  };



  const paragraphsCount = textAreaValue.split('\n').filter((line) => line.trim() !== '').length;

  setParagraphs(paragraphsCount);

  useEffect(() => {
    let charactersArray: string[] = textAreaValue.split('');
    let sentenceCount: number = 0;
    let paragraphsCount: number = 0;
    let wordsCount: number = 0;
    let isInsideWord: boolean = false;
    let spaceCount: number = 0;
    let pronounsCount: number = 0;
    let wordsArray:string[]= textAreaValue.split(" ");

  

    for (let i = 0; i < textAreaValue.length; i++) {
      if (textAreaValue[i] === ' ') {
        if (isInsideWord) {
          isInsideWord = false;
        }
        spaceCount++;
      } else if (textAreaValue[i] === '.' || textAreaValue[i] === '?' || textAreaValue[i] === '!') {
        sentenceCount++;
      } else {
        if (!isInsideWord) {
          wordsCount++;
        }
        isInsideWord = true;
        
      }
    }

    if (textAreaValue.trim() === '') {
    
      setSentence(0);
      
    } else {
      
      setSentence(sentenceCount || 1);
      
    }
    
    const regex = new RegExp(`\\b(${pronounsArray.join("|")})\\b`, 'gi');

    wordsArray.forEach((word)=> {
     
      const matches = word.match(regex)
      if(matches){
        pronounsCount +=matches.length;
      }
    })

    
    let longestWord = "";
      const words = textAreaValue.split(" ");

      for (let i = 0; i < wordsArray.length; i++) {
        if(wordsArray.length ==1) {
          longestWord = wordsArray[0]
        }else{

       
        for (let j = i + 1; j < wordsArray.length; j++) {
          if (wordsArray[i].length < wordsArray[j].length) {
            longestWord = wordsArray[j];
          } else if (wordsArray[i].length > wordsArray[j].length) {
            longestWord = wordsArray[i];
          }else if(wordsArray[i].length ==wordsArray[j].length){
            longestWord = wordsArray[i]
          }
        }
      }
      }

    setLongestWord(longestWord)
    setWords(wordsCount);
    setCharacters(charactersArray.length);
    setPronouns(pronounsCount); //

      console.log("Longest word:", longestWord);
    
  }, [textAreaValue]);

  
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  return (
    <div className="mx-auto mb-6 w-[75vw] h-[65vh]">
      <textarea
        onChange={handleTextAreaInput}
        value={textAreaValue}
        ref={textAreaRef}
        placeholder="Paste your text here..."
        className="text-xl w-full h-full resize-none outline-none p-6 textAreaPlaceholder"
      ></textarea>
    </div>
  );
};

export default Chat;
