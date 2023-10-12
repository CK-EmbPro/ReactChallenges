import React from 'react';

const TextArea = () => {
  return (
    <div className='mx-auto mb-6  w-[75vw] h-[65vh]'>
      <textarea placeholder='Paste your text here...' className='text-xl w-full h-full resize-none outline-none p-6 textAreaPlaceholder'>
      </textarea>
    </div>
  );
}

export default TextArea;
