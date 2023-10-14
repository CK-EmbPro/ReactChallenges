import React, { useRef, useEffect, useState, ChangeEvent } from 'react';
import ResultBox from './ResultBox';

interface TextAreaProps {
  words: number;
  setWords: React.Dispatch<React.SetStateAction<number>>;
  sentence: number;
  setSentence: React.Dispatch<React.SetStateAction<number>>;
  paragraphs: number;
  setParagraphs: React.Dispatch<React.SetStateAction<number>>;
  characters: number;
  setCharacters: React.Dispatch<React.SetStateAction<number>>;
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
    // let wasPreviousCharacterNewLine: boolean = false;

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
      // If the text area is empty, set sentence and paragraphs to 0
      setSentence(0);
      setParagraphs(0);
    } else {
      // Otherwise, update values based on the logic
      setSentence(sentenceCount || 1);
      setParagraphs(paragraphsCount || 1);
    }

    setWords(wordsCount);
    setCharacters(charactersArray.length);
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
